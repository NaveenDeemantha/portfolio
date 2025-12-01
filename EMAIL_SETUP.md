# Contact Form Email Integration Setup Guide

This guide will help you set up the contact form to send emails using Brevo (formerly Sendinblue) SMTP.

## Prerequisites

1. A Brevo account (free tier available at https://www.brevo.com/)
2. Node.js installed on your system

## Step 1: Create a Brevo Account

1. Go to https://www.brevo.com/ and sign up for a free account
2. Verify your email address
3. Complete the account setup

## Step 2: Get Your SMTP Credentials

1. Log in to your Brevo dashboard
2. Go to **Settings** → **SMTP & API**
3. Click on **SMTP** tab
4. You'll see your SMTP credentials:
   - **Login**: This is your SMTP username (usually your email)
   - **Master Password**: Click "Generate a new SMTP key" if you don't have one

## Step 3: Verify Your Sender Email

1. In Brevo dashboard, go to **Senders & IP**
2. Click **Add a sender**
3. Enter your email address (the one you want to send emails from)
4. Verify the email by clicking the link sent to your inbox

## Step 4: Configure the Backend

1. Navigate to the `server` directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `server` directory:
   ```bash
   copy .env.example .env
   ```

4. Edit the `.env` file with your credentials:
   ```env
   # Brevo SMTP Configuration
   BREVO_SMTP_USER=your-brevo-login-email@example.com
   BREVO_SMTP_KEY=your-generated-smtp-key
   
   # Email Configuration
   BREVO_SENDER_EMAIL=your-verified-sender@example.com
   RECIPIENT_EMAIL=your-email@example.com
   
   # Server Configuration
   PORT=3001
   ```

   **Important:**
   - `BREVO_SMTP_USER`: Your Brevo login email
   - `BREVO_SMTP_KEY`: The SMTP key you generated in Step 2
   - `BREVO_SENDER_EMAIL`: Must be a verified sender email in Brevo
   - `RECIPIENT_EMAIL`: Where you want to receive contact form submissions

## Step 5: Configure the Frontend

1. Create a `.env` file in the root directory (if it doesn't exist):
   ```bash
   # In the root directory (my-portfolio)
   echo VITE_API_URL=http://localhost:3001 > .env
   ```

2. For production, update this to your deployed backend URL:
   ```env
   VITE_API_URL=https://your-backend-domain.com
   ```

## Step 6: Run the Application

1. **Start the backend server** (in a new terminal):
   ```bash
   cd server
   npm run dev
   ```
   
   You should see:
   ```
   ✅ SMTP server is ready to send emails
   🚀 Server running on http://localhost:3001
   ```

2. **Start the frontend** (in another terminal):
   ```bash
   # From the root directory
   npm run dev
   ```

## Step 7: Test the Contact Form

1. Open your portfolio in the browser (usually http://localhost:5173)
2. Navigate to the contact section
3. Fill in the form with test data
4. Click "Send Message"
5. You should receive an email at your `RECIPIENT_EMAIL`

## Troubleshooting

### "SMTP connection error"
- Double-check your BREVO_SMTP_USER and BREVO_SMTP_KEY
- Make sure you're using the SMTP key, not the API key
- Verify your Brevo account is active

### "Failed to send message"
- Check that BREVO_SENDER_EMAIL is verified in Brevo
- Look at the server console for detailed error messages
- Ensure the backend server is running

### CORS errors
- Make sure both frontend and backend are running
- Check that VITE_API_URL in frontend .env matches your backend URL

### Email not received
- Check your spam folder
- Verify RECIPIENT_EMAIL is correct
- Check Brevo dashboard for email logs

## Production Deployment

### Backend Deployment (e.g., Railway, Render, Heroku)

1. Deploy the `server` folder to your hosting platform
2. Set environment variables in your hosting platform's dashboard
3. Note the deployed URL (e.g., https://your-app.railway.app)

### Frontend Configuration

1. Update `.env` in your frontend:
   ```env
   VITE_API_URL=https://your-backend-url.com
   ```

2. Rebuild and deploy your frontend

## Brevo Free Tier Limits

- **300 emails per day**
- **Unlimited contacts**
- Perfect for portfolio contact forms!

## Security Notes

- ✅ Never commit `.env` files to Git
- ✅ Keep your SMTP keys private
- ✅ Use environment variables for all sensitive data
- ✅ The backend validates all form inputs
- ✅ CORS is configured to prevent unauthorized access

## Email Template Customization

To customize the email template, edit `server/index.js` and modify the HTML in the `mailOptions.html` section.

## Need Help?

- Brevo Documentation: https://developers.brevo.com/
- Nodemailer Documentation: https://nodemailer.com/
- Check server logs for detailed error messages

---

**That's it! Your contact form is now fully functional with email notifications! 🎉**
