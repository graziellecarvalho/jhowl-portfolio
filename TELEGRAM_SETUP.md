# Secure Telegram Bot Setup Guide

This guide will help you set up the secure Telegram bot integration for your contact form using a backend API.

## Architecture Overview

✅ **Secure**: Bot token is kept on the backend server  
✅ **Protected**: Rate limiting prevents spam  
✅ **Validated**: Server-side validation and sanitization  
✅ **Reliable**: Proper error handling and logging  

## Step 1: Create a Telegram Bot

1. Open Telegram and search for `@BotFather`
2. Start a chat with BotFather and send `/newbot`
3. Follow the instructions to create your bot
4. Save the bot token that BotFather gives you

## Step 2: Get Your Chat ID

1. Start a chat with your new bot
2. Send any message to the bot
3. Visit this URL in your browser (replace `YOUR_BOT_TOKEN` with your actual token):
   ```
   https://api.telegram.org/botYOUR_BOT_TOKEN/getUpdates
   ```
4. Look for the `"chat":{"id":123456789}` in the response
5. Save this chat ID number

## Step 3: Set Up the Backend Server

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the server directory:
   ```env
   TELEGRAM_BOT_TOKEN=your_bot_token_here
   TELEGRAM_CHAT_ID=your_chat_id_here
   FRONTEND_URL=http://localhost:5173
   PORT=3001
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

## Step 4: Configure Frontend

1. Create a `.env` file in your project root (frontend):
   ```env
   VITE_API_URL=http://localhost:3001
   ```

## Step 5: Test the Integration

1. Start your backend server: `cd server && npm run dev`
2. Start your frontend: `npm run dev`
3. Go to the contact section of your website
4. Fill out the form and submit
5. Check your Telegram chat to see if you receive the message

## Security Features

- **Rate Limiting**: 5 requests per 15 minutes per IP
- **Input Sanitization**: Prevents XSS and injection attacks
- **CORS Protection**: Only allows requests from your frontend
- **Server-side Validation**: Double validation of all inputs
- **Error Handling**: Proper error responses without exposing internals

## Production Deployment

### Backend (Server)
- Deploy to a service like Heroku, Railway, or DigitalOcean
- Set environment variables on your hosting platform
- Use HTTPS in production

### Frontend
- Update `VITE_API_URL` to point to your production backend
- Deploy to Vercel, Netlify, or similar

## Environment Variables

### Backend (.env in server directory)
```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
FRONTEND_URL=https://yourdomain.com
PORT=3001
```

### Frontend (.env in project root)
```env
VITE_API_URL=https://your-backend-domain.com
```

## Troubleshooting

- **CORS errors**: Check that `FRONTEND_URL` matches your frontend domain
- **Rate limiting**: Wait 15 minutes if you hit the limit
- **Telegram errors**: Verify bot token and chat ID are correct
- **Network errors**: Ensure backend server is running and accessible

## API Endpoints

- `POST /api/contact` - Submit contact form
- `GET /api/health` - Health check endpoint 