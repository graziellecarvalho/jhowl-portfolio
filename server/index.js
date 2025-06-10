const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:5173',
  credentials: true
}));

app.use(express.json());

// Rate limiting to prevent spam
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: {
    error: 'Too many requests from this IP, please try again later.'
  },
  standardHeaders: true,
  legacyHeaders: false,
});

// Apply rate limiting to contact form endpoint
app.use('/api/contact', limiter);

// Contact form endpoint
app.post('/api/contact', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Server-side validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'All fields are required'
      });
    }

    if (!email.includes('@')) {
      return res.status(400).json({
        error: 'Please provide a valid email address'
      });
    }

    if (name.length < 2) {
      return res.status(400).json({
        error: 'Name must be at least 2 characters long'
      });
    }

    if (message.length < 10) {
      return res.status(400).json({
        error: 'Message must be at least 10 characters long'
      });
    }

    // Sanitize inputs (basic sanitization)
    const sanitizedName = name.trim().substring(0, 100);
    const sanitizedEmail = email.trim().substring(0, 100);
    const sanitizedMessage = message.trim().substring(0, 2000);

    // Send to Telegram
    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${process.env.TELEGRAM_BOT_TOKEN}/sendMessage`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: process.env.TELEGRAM_CHAT_ID,
          text: formatTelegramMessage(sanitizedName, sanitizedEmail, sanitizedMessage),
          parse_mode: 'HTML',
        }),
      }
    );

    if (!telegramResponse.ok) {
      console.error('Telegram API error:', await telegramResponse.text());
      return res.status(500).json({
        error: 'Failed to send message. Please try again later.'
      });
    }

    const result = await telegramResponse.json();
    
    if (result.ok) {
      res.status(200).json({
        success: true,
        message: 'Message sent successfully!'
      });
    } else {
      throw new Error('Telegram API returned error');
    }

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      error: 'Internal server error. Please try again later.'
    });
  }
});

function formatTelegramMessage(name, email, message) {
  return `
<b>📧 New Contact Form Submission</b>

<b>Name:</b> ${name}
<b>Email:</b> ${email}
<b>Message:</b>

${message}

---
<i>Sent from your website contact form</i>
  `.trim();
}

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', timestamp: new Date().toISOString() });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Contact form endpoint: http://localhost:${PORT}/api/contact`);
}); 