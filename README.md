# Dinesh Daggolu - Portfolio Website

A modern, interactive portfolio website built with React, Express.js, PostgreSQL, and featuring 3D animations. Showcases the professional profile of Dinesh Daggolu, a B.Tech Computer Science student.

## Features

- **3D Animated Interface** - Interactive Three.js animations and particle effects
- **Contact Form** - Persistent message storage with PostgreSQL database
- **Admin Dashboard** - View all contact messages at `/admin`
- **Email Notifications** - Automatic email alerts for new messages (optional)
- **Responsive Design** - Mobile-friendly with modern UI components
- **Dark Theme** - Professional styling with cyan/purple accent colors

## Tech Stack

- **Frontend**: React 18, TypeScript, Tailwind CSS, Three.js, Framer Motion
- **Backend**: Express.js, TypeScript
- **Database**: PostgreSQL (Neon)
- **Email**: SendGrid (optional)
- **UI Components**: shadcn/ui, Radix UI
- **Build Tool**: Vite

## Quick Start

1. **Clone the repository**
```bash
git clone <your-repo-url>
cd portfolio
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
```bash
cp .env.example .env
# Edit .env with your database credentials
```

4. **Push database schema**
```bash
npm run db:push
```

5. **Start development server**
```bash
npm run dev
```

Visit `http://localhost:5174` to view the website.

## Environment Variables

- `DATABASE_URL` - PostgreSQL connection string (required)
- `NODE_ENV` - Environment mode (development/production)
- `SENDGRID_API_KEY` - Email service API key (optional)

## Deployment

### Option 1: Vercel (Frontend) + Railway (Backend)
1. Deploy frontend to Vercel
2. Deploy backend to Railway with database URL

### Option 2: Render (Full-stack)
1. Connect GitHub repository
2. Add environment variables
3. Deploy with build command: `npm run build`

### Option 3: Digital Ocean App Platform
1. Create new app from GitHub
2. Configure build and run commands
3. Add environment variables

## Database Schema

The application uses a PostgreSQL database with the following schema:

- **contacts** table: Stores contact form submissions
  - id (UUID)
  - name (VARCHAR)
  - email (VARCHAR) 
  - subject (VARCHAR)
  - message (TEXT)
  - createdAt (TIMESTAMP)

## Development

- **Frontend**: Runs on `http://localhost:5174`
- **Backend**: Runs on `http://localhost:5000`
- **Admin Panel**: Access at `/admin`

## Contact

- **Email**: daggoludinesh@gmail.com
- **Phone**: +91 9392798679
- **Location**: Avadi, Chennai, Tamil Nadu

---

Built with modern web technologies and designed for professional showcase.