# Email Setup for Contact Form

## Setup Instructions

1. **Create a `.env.local` file** in the root of your project with:
   ```
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   ```

2. **Get Gmail App Password**:
   - Go to your Google Account settings
   - Enable 2-factor authentication
   - Generate an App Password for "Mail"
   - Use this password (not your regular Gmail password)

3. **Update the API route** if you want to use a different email service:
   - Edit `app/api/contact/route.ts`
   - Change the service from 'gmail' to your preferred provider
   - Update the auth configuration accordingly

## How It Works

- When someone submits the contact form, it sends a POST request to `/api/contact`
- The API validates the form data and sends an email to `mecg-board@umich.edu`
- The email includes the sender's name, email, subject, and message
- Users get immediate feedback on whether the message was sent successfully

## Security Notes

- Never commit your `.env.local` file to git
- Use App Passwords, not your main Gmail password
- Consider rate limiting for production use
