# EmailJS Setup Instructions

To enable the contact form to send emails to your mailbox (cornzeh@gmail.com), follow these steps:

## Step 1: Sign up for EmailJS

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account

## Step 2: Create an Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions to connect your email account
5. Copy the **Service ID** (you'll need this later)

## Step 3: Create an Email Template

1. In the EmailJS dashboard, go to **Email Templates**
2. Click **Create New Template**
3. Use the following template configuration:

   **Template Name:** Contact Form

   **To Email:** `cornzeh@gmail.com`

   **From Name:** `{{email}}`

   **From Email:** Use Default Email Address

   **Reply To:** `{{email}}`

   **Subject:** `New Contact Form Message from: {{email}}`

   **Content (Body):**
   ```
   You have received a new message from your portfolio contact form.

   From: {{name}}
   Email: {{email}}

   Message:
   {{message}}
   ```

4. Make sure to include these template variables in your template:

   - `{{name}}` - Sender's name
   - `{{email}}` - Sender's email address
   - `{{message}}` - The message content

5. Copy the **Template ID** (you'll need this later)

## Step 4: Get Your Public Key

1. In the EmailJS dashboard, go to **Account** → **General**
2. Copy your **Public Key** (also called API Key)

## Step 5: Create Environment Variables

1. Create a `.env` file in the root of your project (same directory as `package.json`)
2. Add the following variables:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
```

3. Replace the placeholder values with your actual credentials from EmailJS

## Step 6: Restart Your Development Server

After creating the `.env` file, restart your development server:

```bash
npm run dev
```

## Important Notes

- The `.env` file is already added to `.gitignore` so your credentials won't be committed to git
- Make sure your EmailJS service is properly connected and verified
- Test the form after setup to ensure emails are being sent correctly

## Troubleshooting

If you still get errors:

1. Verify all three environment variables are set correctly
2. Check that your EmailJS service is active
3. Verify the template variables match what's in your template
4. Check the browser console for detailed error messages
