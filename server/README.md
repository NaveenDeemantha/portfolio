# Portfolio Contact Form Backend

Express.js backend server for handling contact form submissions via Brevo SMTP.

## Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Configure environment variables:**
   ```bash
   copy .env.example .env
   ```
   
   Then edit `.env` with your Brevo credentials (see main EMAIL_SETUP.md)

3. **Start the server:**
   ```bash
   npm run dev
   ```

## API Endpoints

### POST `/api/contact`
Submit a contact form message.

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Hello, I'd like to discuss a project..."
}
```

**Success Response (200):**
```json
{
  "success": true,
  "message": "Message sent successfully!"
}
```

**Error Response (400/500):**
```json
{
  "success": false,
  "message": "Error description"
}
```

### GET `/api/health`
Health check endpoint.

**Response:**
```json
{
  "status": "ok",
  "message": "Server is running"
}
```

## Environment Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `BREVO_SMTP_USER` | Your Brevo SMTP login | your-email@example.com |
| `BREVO_SMTP_KEY` | Your Brevo SMTP key | xsmtpsib-... |
| `BREVO_SENDER_EMAIL` | Verified sender email | noreply@yourdomain.com |
| `RECIPIENT_EMAIL` | Where to receive messages | your-email@example.com |
| `PORT` | Server port | 3001 |

## Features

- ✅ Email validation
- ✅ Beautiful HTML email templates
- ✅ CORS enabled for frontend
- ✅ Error handling
- ✅ Input sanitization
- ✅ Brevo SMTP integration

## Development

```bash
npm run dev  # Start with auto-reload
```

## Production

```bash
npm start    # Start without auto-reload
```

## Deployment

This server can be deployed to:
- Railway
- Render
- Heroku
- Vercel (as serverless functions)
- Any Node.js hosting platform

Make sure to set environment variables in your hosting platform's dashboard.
