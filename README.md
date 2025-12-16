# Vendigo Landing Page

A modern React landing page for Vendigo's IT Health Check services, built with Tailwind CSS.

## Features

- **Tailwind CSS** - Utility-first CSS framework for rapid UI development
- **Responsive Design** - Mobile-first approach with responsive breakpoints
- **Modern UI** - Custom gradients, shadows, and smooth animations
- **Component-based Architecture** - Modular React components for maintainability
- **Performance Optimized** - Built with React 18 and optimized for production

## Tech Stack

- **React 18** - Modern React with hooks and functional components
- **Tailwind CSS 3** - Utility-first CSS framework
- **PostCSS** - CSS processing with autoprefixer
- **Create React App** - Zero-configuration build setup

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Tailwind Configuration

The project includes custom Tailwind configuration with:
- Custom color palette (primary, dark shades)
- Custom gradient backgrounds
- Extended font families
- Responsive breakpoints

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to a Git repository (GitHub, GitLab, or Bitbucket)
2. Connect your repository to Vercel
3. Deploy automatically

## Project Structure

```
src/
├── components/          # React components
│   ├── Header.js       # Navigation header
│   ├── HeroSection.js  # Main hero section
│   ├── CriticalAreas.js # 6 critical areas grid
│   ├── ProcessSection.js # 3-week process timeline
│   ├── DocumentationSection.js # Deliverables list
│   ├── CTASection.js   # Call-to-action section
│   └── Footer.js       # Footer with links
├── App.js              # Main app component
├── index.js            # React entry point
└── index.css           # Tailwind CSS imports
```

## License

This project is private and proprietary.