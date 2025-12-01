import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// CORS Configuration
const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);

        // List of allowed origins
        const allowedOrigins = [
            'http://localhost:5173',
            'http://localhost:3000',
            'http://localhost:4173',
            'https://naveendeemantha.vercel.app',
            'https://naveendeemantha.netlify.app',
            // Add your production domain here
            process.env.FRONTEND_URL,
        ].filter(Boolean); // Remove undefined values

        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);
        } else {
            // For development, allow all origins
            if (process.env.NODE_ENV !== 'production') {
                callback(null, true);
            } else {
                callback(new Error('Not allowed by CORS'));
            }
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
};

// Middleware
app.use(cors(corsOptions));
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
        // Get current date and time
        const submissionDate = new Date().toLocaleString('en-US', {
            month: 'short',
            day: 'numeric',
            year: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });

        // Email to yourself (notification)
        const mailOptions = {
            from: `"Portfolio" <${process.env.BREVO_SENDER_EMAIL}>`,
            to: process.env.RECIPIENT_EMAIL,
            replyTo: `"${name}" <${email}>`,
            subject: `New contact from ${name}`,
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; background-color: #ffffff; color: #1f2937;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb;">
                        <tr>
                            <td style="padding: 40px 20px;">
                                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px;">
                                    
                                    <!-- Header -->
                                    <tr>
                                        <td style="padding: 32px 32px 24px 32px; border-bottom: 1px solid #e5e7eb;">
                                            <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #111827; line-height: 1.25;">New Contact Message</h1>
                                            <p style="margin: 8px 0 0 0; font-size: 14px; color: #6b7280; line-height: 1.5;">You received a new message from your portfolio contact form.</p>
                                        </td>
                                    </tr>
                                    
                                    <!-- Content -->
                                    <tr>
                                        <td style="padding: 32px;">
                                            
                                            <!-- Contact Info -->
                                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                                                <tr>
                                                    <td style="padding-bottom: 16px;">
                                                        <table width="100%" cellpadding="0" cellspacing="0">
                                                            <tr>
                                                                <td width="80" style="vertical-align: top; padding-right: 16px;">
                                                                    <p style="margin: 0; font-size: 13px; font-weight: 500; color: #6b7280; line-height: 1.5;">From</p>
                                                                </td>
                                                                <td style="vertical-align: top;">
                                                                    <p style="margin: 0; font-size: 14px; font-weight: 500; color: #111827; line-height: 1.5;">${name}</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="padding-bottom: 16px;">
                                                        <table width="100%" cellpadding="0" cellspacing="0">
                                                            <tr>
                                                                <td width="80" style="vertical-align: top; padding-right: 16px;">
                                                                    <p style="margin: 0; font-size: 13px; font-weight: 500; color: #6b7280; line-height: 1.5;">Email</p>
                                                                </td>
                                                                <td style="vertical-align: top;">
                                                                    <p style="margin: 0; font-size: 14px; font-weight: 500; color: #111827; line-height: 1.5;">
                                                                        <a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a>
                                                                    </p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <table width="100%" cellpadding="0" cellspacing="0">
                                                            <tr>
                                                                <td width="80" style="vertical-align: top; padding-right: 16px;">
                                                                    <p style="margin: 0; font-size: 13px; font-weight: 500; color: #6b7280; line-height: 1.5;">Date</p>
                                                                </td>
                                                                <td style="vertical-align: top;">
                                                                    <p style="margin: 0; font-size: 14px; font-weight: 500; color: #111827; line-height: 1.5;">${submissionDate}</p>
                                                                </td>
                                                            </tr>
                                                        </table>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <!-- Message -->
                                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                                                <tr>
                                                    <td style="padding-bottom: 8px;">
                                                        <p style="margin: 0; font-size: 13px; font-weight: 500; color: #6b7280; line-height: 1.5;">Message</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px;">
                                                        <p style="margin: 0; font-size: 14px; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <!-- Reply Button -->
                                            <table width="100%" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td>
                                                        <a href="mailto:${email}?subject=Re:%20Portfolio%20Inquiry" style="display: inline-block; background-color: #111827; color: #ffffff; padding: 12px 24px; border-radius: 6px; text-decoration: none; font-size: 14px; font-weight: 500; line-height: 1;">Reply</a>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                        </td>
                                    </tr>
                                    
                                    <!-- Footer -->
                                    <tr>
                                        <td style="padding: 24px 32px; border-top: 1px solid #e5e7eb; background-color: #f9fafb;">
                                            <table width="100%" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td align="center" style="padding-bottom: 16px;">
                                                        <div style="display: inline-block; background-color: #111827; color: #ffffff; width: 40px; height: 40px; border-radius: 8px; text-align: center; line-height: 40px; font-size: 18px; font-weight: 700;">ND</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                        <p style="margin: 0; font-size: 12px; color: #6b7280; line-height: 1.5;">
                                                            This message was sent from your portfolio contact form. You can reply directly to this email.
                                                        </p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `,
            text: `
New Contact Message

From: ${name}
Email: ${email}
Date: ${submissionDate}

Message:
${message}

---
Reply to this email to respond.
            `,
        };

        // Auto-reply confirmation email to sender
        const confirmationEmail = {
            from: `"ND." <${process.env.BREVO_SENDER_EMAIL}>`,
            to: email,
            subject: 'Message received - ND. Portfolio',
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <meta charset="utf-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                </head>
                <body style="margin: 0; padding: 0; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Helvetica Neue', Arial, sans-serif; background-color: #ffffff; color: #1f2937;">
                    <table width="100%" cellpadding="0" cellspacing="0" style="background-color: #f9fafb;">
                        <tr>
                            <td style="padding: 40px 20px;">
                                <table width="100%" cellpadding="0" cellspacing="0" style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border: 1px solid #e5e7eb; border-radius: 8px;">
                                    
                                    <!-- Header -->
                                    <tr>
                                        <td style="padding: 32px 32px 24px 32px; border-bottom: 1px solid #e5e7eb;">
                                            <h1 style="margin: 0; font-size: 24px; font-weight: 600; color: #111827; line-height: 1.25;">Thanks for reaching out!</h1>
                                            <p style="margin: 8px 0 0 0; font-size: 14px; color: #6b7280; line-height: 1.5;">Your message has been successfully received.</p>
                                        </td>
                                    </tr>
                                    
                                    <!-- Content -->
                                    <tr>
                                        <td style="padding: 32px;">
                                            <p style="margin: 0 0 16px 0; font-size: 14px; color: #374151; line-height: 1.6;">Hi ${name},</p>
                                            <p style="margin: 0 0 16px 0; font-size: 14px; color: #374151; line-height: 1.6;">Thank you for contacting me through my portfolio. I've received your message and will get back to you as soon as possible, typically within 24-48 hours.</p>
                                            <p style="margin: 0 0 24px 0; font-size: 14px; color: #374151; line-height: 1.6;">In the meantime, feel free to check out my other projects or connect with me on social media.</p>
                                            
                                            <!-- Message Summary -->
                                            <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom: 24px;">
                                                <tr>
                                                    <td style="padding-bottom: 8px;">
                                                        <p style="margin: 0; font-size: 13px; font-weight: 500; color: #6b7280; line-height: 1.5;">Your message</p>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 6px; padding: 16px;">
                                                        <p style="margin: 0; font-size: 14px; color: #374151; line-height: 1.6; white-space: pre-wrap;">${message}</p>
                                                    </td>
                                                </tr>
                                            </table>
                                            
                                            <p style="margin: 0; font-size: 14px; color: #374151; line-height: 1.6;">Best regards</p>
                                        </td>
                                    </tr>
                                    
                                    <!-- Footer -->
                                    <tr>
                                        <td style="padding: 24px 32px; border-top: 1px solid #e5e7eb; background-color: #f9fafb;">
                                            <table width="100%" cellpadding="0" cellspacing="0">
                                                <tr>
                                                    <td align="center" style="padding-bottom: 16px;">
                                                        <div style="display: inline-block; background-color: #111827; color: #ffffff; width: 40px; height: 40px; border-radius: 8px; text-align: center; line-height: 40px; font-size: 18px; font-weight: 700;">ND</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td align="center">
                                                        <p style="margin: 0; font-size: 12px; color: #6b7280; line-height: 1.5;">
                                                            This is an automated confirmation. Please do not reply to this email.
                                                        </p>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                    </tr>
                                    
                                </table>
                            </td>
                        </tr>
                    </table>
                </body>
                </html>
            `,
            text: `
Hi ${name},

Thank you for contacting me through my portfolio. I've received your message and will get back to you as soon as possible, typically within 24-48 hours.

Your message:
${message}

Best regards

---
This is an automated confirmation. Please do not reply to this email.
            `,
        };

        // Send both emails
        await transporter.sendMail(mailOptions);
        await transporter.sendMail(confirmationEmail);

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
