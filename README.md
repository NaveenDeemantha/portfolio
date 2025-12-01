# 🎨 My Portfolio

A modern, futuristic portfolio website built with React, Vite, GSAP, and Tailwind CSS.

## ✨ Features

- 🎭 **Stunning Animations**: GSAP-powered smooth animations and transitions
- 🎨 **Modern Design**: Glassmorphism, gradients, and premium aesthetics
- 📱 **Responsive**: Fully responsive design for all devices
- 📧 **Contact Form**: Functional email integration with Brevo SMTP
- 🌙 **Dark Theme**: Beautiful dark mode design
- ⚡ **Fast**: Built with Vite for lightning-fast performance

## 📧 Contact Form Setup

This portfolio includes a fully functional contact form with email notifications!

**Quick Setup:**
1. See [EMAIL_SETUP.md](./EMAIL_SETUP.md) for detailed instructions
2. Configure your Brevo SMTP credentials
3. Run both frontend and backend servers

**Quick Start:**
```powershell
.\start.ps1
```

Or manually:
```bash
# Terminal 1 - Backend
cd server
npm install
npm run dev

# Terminal 2 - Frontend
npm run dev
```

📖 **Full Documentation**: [CONTACT_FORM_SUMMARY.md](./CONTACT_FORM_SUMMARY.md)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd my-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   copy .env.example .env
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open in browser**
   ```
   http://localhost:5173
   ```

## 🛠️ Tech Stack

- **Frontend Framework**: React 19
- **Build Tool**: Vite 7
- **Styling**: Tailwind CSS 4
- **Animations**: GSAP 3
- **Icons**: Lucide React
- **Smooth Scrolling**: Lenis
- **Backend**: Express.js
- **Email**: Nodemailer + Brevo SMTP

## 📁 Project Structure

```
my-portfolio/
├── src/
│   ├── components/      # React components
│   ├── hooks/          # Custom React hooks
│   ├── lib/            # Utility functions
│   └── App.jsx         # Main app component
├── server/             # Backend API server
│   ├── index.js        # Express server
│   └── package.json    # Server dependencies
├── public/             # Static assets
└── package.json        # Frontend dependencies
```

## 📜 Available Scripts

### Frontend
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend
- `cd server && npm run dev` - Start backend with auto-reload
- `cd server && npm start` - Start backend (production)

## 🌐 Deployment

### Frontend
Deploy to Vercel, Netlify, or any static hosting:
```bash
npm run build
# Upload dist/ folder
```

### Backend
Deploy to Railway, Render, or Heroku:
1. Deploy the `server/` folder
2. Set environment variables
3. Update frontend `.env` with backend URL

## 📝 License

MIT License - feel free to use this for your own portfolio!

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

---

Made with ❤️ and React
