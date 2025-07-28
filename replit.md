# Project Overview

This is a modern full-stack portfolio website built with React, Express.js, PostgreSQL, and styled with Tailwind CSS and shadcn/ui components. The application features a personal portfolio for Dinesh Daggolu, a B.Tech Computer Science student, with 3D graphics, interactive animations, and a fully functional contact form with database storage.

## Recent Changes (January 28, 2025)
- ✓ Integrated PostgreSQL database using Neon hosting
- ✓ Implemented DatabaseStorage class replacing MemStorage
- ✓ Added contact form data persistence to database
- ✓ Created admin dashboard at /admin route for viewing messages
- ✓ Fixed TypeScript configuration issues for better compatibility
- ✓ Set up complete full-stack architecture with database operations

## User Preferences

Preferred communication style: Simple, everyday language.

## Personal Information (Dinesh Daggolu)
- B.Tech student at Vel Tech Rangarajan Dr. Sagunthala R&D Institute of Science and Technology (2023-2027)
- Current CGPA: 8.592
- Location: Avadi, Chennai, Tamil Nadu
- Contact: daggoludinesh@gmail.com, +91 9392798679
- Specializes in Python programming, Data Structures, DBMS, and Algorithms
- Certifications: Python (HackerRank), DBMS (Scalar), Python for Data Science (IBM), Python Programming (Skill India)

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom CSS variables for theming
- **UI Components**: shadcn/ui component library with Radix UI primitives
- **Animations**: Framer Motion for smooth animations and transitions
- **3D Graphics**: Three.js for interactive 3D elements and WebGL rendering
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Framework**: Express.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Validation**: Zod for runtime type checking and validation
- **Session Management**: Built-in session handling with connect-pg-simple

### Build System
- **Build Tool**: Vite for fast development and optimized production builds
- **TypeScript**: Full TypeScript support across frontend, backend, and shared code
- **Module System**: ESM (ES Modules) throughout the project
- **Bundle Strategy**: Separate client and server bundles

## Key Components

### Frontend Components
- **Portfolio Sections**: Hero, About, Skills, Projects, Contact
- **3D Elements**: Interactive Three.js scenes with floating geometries
- **Animations**: Particle background system and smooth scroll animations
- **UI System**: Complete shadcn/ui component library integration
- **Form System**: Contact form with real-time validation

### Backend Features
- **Contact API**: Form submission endpoint with validation
- **Static Serving**: Serves built frontend assets in production
- **Development Tools**: Hot module replacement and error overlay
- **Database Schema**: Contact storage with PostgreSQL

### Shared Code
- **Schema Definitions**: Shared TypeScript types and Zod schemas
- **Type Safety**: End-to-end type safety between frontend and backend

## Data Flow

1. **Contact Form Submission**:
   - Frontend form validates using Zod schema
   - React Hook Form manages form state and validation
   - TanStack Query handles API communication
   - Backend validates and processes contact data
   - Success/error feedback via toast notifications

2. **3D Rendering**:
   - Three.js creates WebGL context and 3D scenes
   - Animation loops update particle systems and floating elements
   - Framer Motion coordinates 2D UI animations with 3D elements

3. **Page Navigation**:
   - Wouter handles client-side routing
   - Smooth scroll navigation between portfolio sections
   - Mobile-responsive navigation with hamburger menu

## External Dependencies

### Core Libraries
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Framework**: Radix UI primitives, Tailwind CSS, shadcn/ui
- **Animation**: Framer Motion for UI animations
- **3D Graphics**: Three.js for WebGL rendering
- **HTTP Client**: TanStack Query for API communication
- **Validation**: Zod for schema validation
- **Database**: Drizzle ORM with Neon PostgreSQL

### Development Tools
- **Vite**: Build tool and development server
- **TypeScript**: Type checking and compilation
- **ESBuild**: Fast bundling for production
- **PostCSS**: CSS processing with Autoprefixer

### Styling System
- **Design System**: Custom design tokens using CSS variables
- **Color Palette**: Dark theme with cyan, purple, and green accents
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Component Variants**: Class Variance Authority for component styling

## Deployment Strategy

### Development
- **Dev Server**: Vite development server with HMR
- **API Development**: Express server with tsx for TypeScript execution
- **Database**: Local or cloud PostgreSQL with Drizzle migrations

### Production Build
- **Frontend**: Vite builds optimized static assets
- **Backend**: ESBuild creates production server bundle
- **Database**: Drizzle migrations for schema management
- **Static Assets**: Express serves built frontend from dist/public

### Environment Configuration
- **Database URL**: PostgreSQL connection string required
- **Development Mode**: Automatic detection for development features
- **Type Checking**: Separate TypeScript compilation step

The application is designed as a modern portfolio showcase with emphasis on visual appeal, smooth interactions, and professional presentation. The architecture supports both development efficiency and production performance while maintaining type safety throughout the stack.