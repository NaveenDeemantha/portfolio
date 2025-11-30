import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Create Brevo (Sendinblue) transporter
const transporter = nodemailer.createTransport({
    host: 'smtp-relay.brevo.com',
    port: 587,
    secure: false, // Use TLS
    auth: {
        user: process.env.BREVO_SMTP_USER,
        pass: process.env.BREVO_SMTP_KEY,
    },
});

// Verify transporter configuration
transporter.verify((error, success) => {
    if (error) {
        console.error('SMTP connection error:', error);
    } else {
        console.log('✅ SMTP server is ready to send emails');
    }
});

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required',
        });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({
            success: false,
            message: 'Invalid email address',
        });
    }

    try {
        // Email to yourself (notification)
        const mailOptions = {
            from: process.env.BREVO_SENDER_EMAIL,
            to: process.env.RECIPIENT_EMAIL,
            replyTo: email,
            subject: `Portfolio Contact: Message from ${name}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body {
                            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                            line-height: 1.6;
                            color: #333;
                            max-width: 600px;
                            margin: 0 auto;
                            padding: 20px;
                        }
                        .container {
                            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                            border-radius: 10px;
                            padding: 30px;
                            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                        }
                        .content {
                            background: white;
                            border-radius: 8px;
                            padding: 25px;
                        }
                        h2 {
                            color: #667eea;
                            margin-top: 0;
                            border-bottom: 3px solid #667eea;
                            padding-bottom: 10px;
                        }
                        .field {
                            margin-bottom: 20px;
                        }
                        .label {
                            font-weight: bold;
                            color: #555;
                            display: block;
                            margin-bottom: 5px;
                        }
                        .value {
                            color: #333;
                            padding: 10px;
                            background: #f8f9fa;
                            border-radius: 5px;
                            border-left: 4px solid #667eea;
                        }
                        .message-box {
                            background: #f8f9fa;
                            padding: 15px;
                            border-radius: 5px;
                            border-left: 4px solid #764ba2;
                            white-space: pre-wrap;
                        }
                        .footer {
                            margin-top: 20px;
                            padding-top: 20px;
                            border-top: 1px solid #e0e0e0;
                            font-size: 12px;
                            color: #777;
                            text-align: center;
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="content">
                            <h2>📬 New Contact Form Submission</h2>
                            
                            <div class="field">
                                <span class="label">👤 Name:</span>
                                <div class="value">${name}</div>
                            </div>
                            
                            <div class="field">
                                <span class="label">📧 Email:</span>
                                <div class="value"><a href="mailto:${email}">${email}</a></div>
                            </div>
                            
                            <div class="field">
                                <span class="label">💬 Message:</span>
                                <div class="message-box">${message}</div>
                            </div>
                            
                            <div class="footer">
                                Sent from your portfolio contact form
                            </div>
                        </div>
                    </div>
                </body>
                </html>
            `,
            text: `
New Contact Form Submission

Name: ${name}
Email: ${email}

Message:
${message}
            `,
        };

        // Send email
        await transporter.sendMail(mailOptions);

        res.status(200).json({
            success: true,
            message: 'Message sent successfully!',
        });
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({
            success: false,
            message: 'Failed to send message. Please try again later.',
        });
    }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Server is running' });
});

app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
});
