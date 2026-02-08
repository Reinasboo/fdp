# Quick Start Guide

## Installation

```bash
# Clone repository
git clone https://github.com/yourusername/fdp-site.git
cd fdp-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Development Commands

```bash
# Start dev server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linter
npm run lint
```

## Project Structure

```
fdp-site/
├── src/
│   ├── app/                 # Next.js app router
│   │   ├── page.tsx        # Main page (imports all components)
│   │   ├── layout.tsx      # Root layout
│   │   └── globals.css     # Global styles & animations
│   └── components/          # React components
│       ├── Navbar.tsx      # Navigation header
│       ├── Hero.tsx        # Hero section
│       ├── News.tsx        # News story
│       ├── Quotes.tsx      # Quotes carousel
│       ├── Gallery.tsx     # Image gallery
│       ├── TokenInfo.tsx   # Token details
│       ├── Community.tsx   # Community links
│       └── Footer.tsx      # Footer
├── public/                  # Static assets
├── .github/                # GitHub configuration
├── package.json            # Dependencies
├── next.config.ts         # Next.js config
├── tailwind.config.ts     # Tailwind CSS config
├── tsconfig.json          # TypeScript config
└── vercel.json            # Vercel config
```

## Important Links

- **Pump.fun**: https://pump.fun/coin/5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump
- **DEXscreener**: https://dexscreener.com/solana/Bb91m32WUmYPe7qwwNB4vB757dXfRXuEHRho14KLWo2D
- **X Community**: https://x.com/i/communities/2019793810058838275
- **Contract Address**: `5vS2ssBmYzSYU3GVX2nNhsXNW1JTUX56mwaRX5m6pump`

## Customization

### Update Social Links
Edit these in components:
- Navbar.tsx
- Community.tsx
- Footer.tsx

### Update Colors
Edit CSS variables in `src/app/globals.css`:
```css
:root {
  --accent-pink: #ff006e;
  --accent-blue: #00d9ff;
  --accent-gold: #d4af37;
}
```

### Update Gallery Images
Edit the image URLs in `src/components/Gallery.tsx`:
```tsx
const galleryImages = [
  { id: 1, url: 'https://...' },
  // ...
];
```

## Deployment

### Deploy to Vercel (Recommended)

```bash
# Push to GitHub
git add .
git commit -m "Ready to deploy"
git push origin main

# Then go to vercel.com, import your GitHub repo, and deploy!
```

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed instructions.

## Troubleshooting

### Port 3000 already in use
```bash
npm run dev -- -p 3001
```

### Clear cache
```bash
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Check Node version
```bash
node --version  # Should be 18.x or higher
```

## Documentation

- [README.md](./README.md) - Full documentation
- [DEPLOYMENT.md](./DEPLOYMENT.md) - Deployment guide
- [CONTRIBUTING.md](./CONTRIBUTING.md) - Contributing guidelines
- [SECURITY.md](./SECURITY.md) - Security policy
- [CODE_OF_CONDUCT.md](./CODE_OF_CONDUCT.md) - Community rules
- [CHANGELOG.md](./CHANGELOG.md) - Version history

## Get Help

1. Check existing GitHub issues
2. Read the documentation
3. Open a new issue with details
4. Follow the contributing guidelines

---

**Happy flying! 🐷🚀**
