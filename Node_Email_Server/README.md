# Node Email Server

A simple Node.js email server built with the `http` module.

## Features

- Serves a dynamic HTML page from `public/index.html`
- Logs every request with timestamp
- Handles POST requests to send emails
- Uses Nodemon for live reload during development
- Supports real SMTP credentials via environment variables or Ethereal test mail

## Run locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start in development mode:
   ```bash
   npm run dev
   ```
3. Open:
   ```
   http://localhost:3000
   ```

## SMTP configuration (optional)

If you want to send real emails, set these environment variables:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_USER`
- `SMTP_PASS`

If not provided, the project uses Ethereal to simulate email delivery and print a preview URL.
