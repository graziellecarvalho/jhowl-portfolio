# Jhowl - Backend Developer Portfolio

Welcome to Jhonatan Souza's (Jhowl) personal portfolio website. This is a modern, responsive portfolio showcasing backend development skills, AI development, and API integrations.

## 🚀 Features

- **Responsive Design**: Optimized for all devices with modern UI/UX
- **SEO Optimized**: Comprehensive meta tags, structured data, and semantic HTML
- **Contact Form**: Secure API integration with real-time validation and error handling
- **Modern UI**: Built with React 18, TypeScript, and Tailwind CSS
- **Accessibility**: WCAG compliant with proper ARIA labels and keyboard navigation
- **Performance**: Optimized images, fonts, and build process

## 🛠️ Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS
- **UI Components**: Radix UI primitives with custom styling
- **Build Tool**: Vite 6.0.4
- **API Integration**: Direct calls to https://api.jhowl.com with error handling

## 📦 Installation

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

## 🌐 SEO Features

- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Structured Data**: JSON-LD schema markup for better search results
- **Semantic HTML**: Proper heading hierarchy and ARIA labels
- **Sitemap**: XML sitemap for search engine discovery
- **Robots.txt**: Search engine crawling instructions
- **Performance**: Optimized images, fonts, and gzip compression

## 📱 Contact Integration

The contact form securely sends messages to your API at `https://api.jhowl.com/api/contact`, featuring:
- **Real-time validation**: Client-side form validation with user feedback
- **Error handling**: Comprehensive error handling for network issues, CORS, and API errors
- **Rate limiting protection**: Built-in protection against spam
- **Input sanitization**: Secure data processing
- **Accessibility**: Full keyboard navigation and screen reader support
- **Status feedback**: Clear success/error messages with auto-dismiss

## 🚀 Deployment

### Traditional Deployment

- **Frontend**: Deploy to Vercel, Netlify, or similar platforms
- **API**: Ensure https://api.jhowl.com is running and accessible
- **Environment**: Set `VITE_API_URL` environment variable if needed

## 🔧 Environment Variables

### Frontend (.env in project root)
```env
VITE_API_URL=https://api.jhowl.com
```

## 📁 Project Structure

```
src/
├── components/ui/          # Reusable UI components (Radix UI + Tailwind)
├── lib/                   # Utilities and API service
├── screens/               # Main application screens
│   └── MacbookAirDark/    # Main portfolio layout
│       └── sections/      # Individual portfolio sections
└── index.tsx             # Application entry point
```

## 🔍 Development Features

- **Hot Reload**: Instant updates during development
- **TypeScript**: Full type safety and IntelliSense
- **ESLint**: Code quality and consistency
- **Path Aliases**: Clean imports with `@components`, `@lib`, etc.
- **Component Library**: Reusable UI components with Radix UI primitives

## 📄 License

MIT License - feel free to use this code for your own portfolio!

## 🤝 Contributing

This is a personal portfolio project, but suggestions and improvements are welcome!

---

**Built with ❤️ by Jhowl**
