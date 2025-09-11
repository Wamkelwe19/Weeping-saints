# EmailJS Configuration Guide

## Setup Instructions

To make the contact form work, you need to set up EmailJS with your account credentials:

1. **Create an EmailJS Account**:
   - Go to [EmailJS.com](https://www.emailjs.com/) and sign up for a free account

2. **Get Your Credentials**:
   - After signing up, go to your EmailJS dashboard
   - Note down your **User ID** (found in Account > API Keys)
   - Create a new **Email Service** (Gmail, Outlook, etc.) and note the **Service ID**
   - Create a new **Email Template** and note the **Template ID**

3. **Update the Contact.jsx File**:
   Replace the placeholder values in the `handleSubmit` function with your actual credentials:

   ```javascript
   emailjs.send(
     'YOUR_SERVICE_ID',      // Replace with your Service ID
     'YOUR_TEMPLATE_ID',     // Replace with your Template ID
     formData, 
     'YOUR_USER_ID'          // Replace with your User ID
   )
   ```

4. **Configure Your Email Template**:
   In your EmailJS template, use these variables to capture form data:
   - `{{name}}` - User's name
   - `{{email}}` - User's email
   - `{{message}}` - User's message

## Example Template Setup

Your EmailJS template should look something like this:

**Subject**: New Contact Form Submission from {{name}}

**Body**:
```
Name: {{name}}
Email: {{email}}
Message: {{message}}

This message was sent from your website contact form.
```

## Testing

After setting up:
1. Run your development server: `npm run dev`
2. Fill out the contact form and submit
3. Check your email to confirm the message was received

## Security Notes

- EmailJS credentials are safe to use in frontend code as they are designed for client-side usage
- The free tier includes 200 emails per month
- Consider upgrading to a paid plan for higher volume
