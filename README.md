# Flying Drone Pig ($FDP) - Solana Memecoin Website

**"When pigs fly… electricity stops."**

A premium, gamified memecoin website built with Next.js, React, TypeScript, and Tailwind CSS. Features a futuristic dark theme with neon accents, smooth animations, and Web3 integration.

## Features

- 🎨 **Modern UI/UX**: Glassmorphism, gradient text, and smooth micro-interactions
- 🐷 **Gamified Design**: Floating animations, easter eggs, and playful elements
- 📱 **Fully Responsive**: Mobile-first design with touch-friendly gestures
- ⚡ **High Performance**: Optimized images, lazy loading, and smooth scrolling
- 🎯 **Web3 Integrated**: Links to Pump.fun, DEXscreener, and Solana ecosystem
- 🌙 **Dark Mode**: Cyberpunk-inspired dark theme with neon pink, electric blue, and gold accents

## Sections

1. **Hero**: Eye-catching introduction with animated flying pig logo
2. **News**: Viral story about flying drone pig causing power outage
3. **Quotes**: Rotating carousel of wisdom about prosperity and impossible dreams
4. **Gallery**: Horizontal scrolling image carousel with drag/swipe support
5. **Token Info**: Solana contract details with copy-to-clipboard functionality
6. **Community**: Links to X Community, DEXscreener, Pump.fun
7. **Footer**: Navigation, resources, and community links

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Component Library**: React 19
- **Linting**: ESLint

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm, yarn, pnpm, or bun package manager

### Local Development

1. Clone the repository:

```bash
git clone https://github.com/yourusername/fdp-site.git
cd fdp-site
```

2. Install dependencies:

```bash
npm install
```

3. Run the development server:

```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

The site will auto-reload as you edit files.

## Project Structure

```
fdp-site/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Main page
│   │   └── globals.css         # Global styles & animations
│   └── components/
│       ├── Navbar.tsx          # Navigation header
│       ├── Hero.tsx            # Hero section
│       ├── News.tsx            # News/story section
│       ├── Quotes.tsx          # Quotes carousel
│       ├── Gallery.tsx         # Image gallery carousel
│       ├── TokenInfo.tsx       # Token details
│       ├── Community.tsx       # Community links
│       └── Footer.tsx          # Footer
├── package.json                # Dependencies
├── next.config.ts              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
├── tailwind.config.ts          # Tailwind CSS configuration
└── README.md                   # This file
```

## Available Scripts

- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint

## Customization

### Update Token Links
Replace these URLs throughout the site:
- Pump.fun: `https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump`
- DEXscreener: `https://dexscreener.com/solana/Bb91m32WUmYPe7qwwNB4vB757dXfRXuEHRho14KLWo2D`
- Contract: `5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump`
- X Community: `https://x.com/i/communities/2019793810058838275`

### Update Images
Gallery images are fetched from external URLs. To replace:
1. Update image URLs in `src/components/Gallery.tsx`
2. Update logo in components (using `https://i.imgur.com/0jsGt7u.png`)

### Colors & Theme
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --accent-pink: #ff006e;
  --accent-blue: #00d9ff;
  --accent-gold: #d4af37;
}
```

## Deployment

### Deploy to Vercel (Recommended)

Vercel is the optimal choice for Next.js applications.

1. Push your code to GitHub:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/yourusername/fdp-site.git
git branch -M main
git push -u origin main
```

2. Go to [vercel.com](https://vercel.com) and sign up/login
3. Click "New Project"
4. Select your GitHub repository
5. Accept default settings (Next.js auto-detected)
6. Click "Deploy"

Your site will be live at `https://fdp-site.vercel.app`

### Environment Variables

No environment variables required for basic deployment. The site uses only client-side code and external APIs.

### Performance Tips

- Site uses Next.js Image Optimization for external images
- Tailwind CSS is minified in production
- Code splitting and lazy loading enabled by default
- Browser caching configured for static assets

## SEO & Meta Tags

The site includes:
- OpenGraph meta tags for social sharing
- Favicon configured
- Responsive viewport settings
- Semantic HTML structure

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

MIT License - feel free to fork and modify

## Support

For issues or questions:
1. Check existing GitHub issues
2. Create a new issue with detailed description
3. Include screenshots for UI/UX problems

## Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

**Built with ❤️ for the herd. When pigs fly, fortunes follow.**
