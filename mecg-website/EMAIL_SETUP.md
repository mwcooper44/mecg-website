# Email Setup for Contact Form

## Setup Instructions

This project uses **Nodemailer** with SMTP to send emails from the contact form.

### Step 1: Choose an Email Provider

You can use any email provider that supports SMTP. Common options include:

- **Gmail** (using App Password)
- **Outlook/Hotmail**
- **SendGrid**
- **Mailgun**
- **Custom SMTP server**

### Step 2: Get SMTP Credentials

The exact steps depend on your email provider:

#### Option A: Gmail (Recommended for Development)

1. Enable 2-Step Verification on your Google Account
2. Go to [Google App Passwords](https://myaccount.google.com/apppasswords)
3. Create a new app password for "Mail" and select "Other (Custom name)"
4. Copy the generated 16-character password

**Gmail SMTP Settings:**
- Host: `smtp.gmail.com`
- Port: `587`
- Secure: `false` (STARTTLS)
- User: Your Gmail address
- Password: The app password you generated

#### Option B: Outlook/Hotmail

1. Go to your Microsoft Account security settings
2. Enable 2-Step Verification
3. Generate an app password

**Outlook SMTP Settings:**
- Host: `smtp-mail.outlook.com`
- Port: `587`
- Secure: `false` (STARTTLS)
- User: Your Outlook email address
- Password: Your app password

#### Option C: Custom SMTP Server

Use your provider's SMTP settings:
- **SendGrid**: `smtp.sendgrid.net` (port 587)
- **Mailgun**: `smtp.mailgun.org` (port 587)
- Contact your email provider for specific SMTP settings

### Step 3: Create `.env.local` File

Create a `.env.local` file in the root of your project (`mecg-website/.env.local`) with the following variables:

```env
# SMTP Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password-here
```

**Important Notes:**
- Replace the values with your actual SMTP credentials
- For Gmail, use an **App Password**, not your regular Gmail password
- For port 465, set `SMTP_SECURE=true`
- For port 587, set `SMTP_SECURE=false` (uses STARTTLS)

### Step 4: Restart Your Development Server

After creating the `.env.local` file, restart your Next.js development server:

```bash
npm run dev
```

## How It Works

- When someone submits the contact form, it sends a POST request to `/api/contact`
- The API validates the form data and sends an email to `mecg-board@umich.edu` using Nodemailer
- The email includes the sender's name, email, subject, and message
- The sender's email is set as the reply-to address
- Users get immediate feedback on whether the message was sent successfully

## Security Notes

- Never commit your `.env.local` file to git (it's already in `.gitignore`)
- Keep your SMTP credentials secret
- Use App Passwords instead of your main account password when possible
- Consider rate limiting for production use
- The API route includes XSS protection by escaping HTML in form inputs

## Troubleshooting

### Error: "Email authentication failed"
- Check that your SMTP_USER and SMTP_PASS are correct
- For Gmail, make sure you're using an App Password, not your regular password
- Ensure 2-Step Verification is enabled if using Gmail

### Error: "Could not connect to email server"
- Verify your SMTP_HOST and SMTP_PORT are correct
- Check your firewall/network settings
- Some providers require specific ports (587 for STARTTLS, 465 for SSL)

### Error: "Email service not configured"
- Make sure your `.env.local` file exists in the `mecg-website/` directory
- Verify all required environment variables are set: SMTP_HOST, SMTP_USER, SMTP_PASS
- Restart your development server after creating/updating `.env.local`
