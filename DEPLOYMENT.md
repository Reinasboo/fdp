# Deployment Guide

This guide covers deploying the Flying Drone Pig ($FDP) website to production.

## Quick Deploy to Vercel

Vercel is the recommended deployment platform for Next.js applications and is created by the same team.

### Prerequisites
- GitHub account with the project repository
- Vercel account (free at https://vercel.com)

### Steps

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Vercel**
   - Go to [vercel.com/new](https://vercel.com/new)
   - Click "Continue with GitHub"
   - Select your `fdp-site` repository
   - Click "Import"
   - Framework: Next.js will be auto-detected
   - Click "Deploy"

3. **Configure Domain (Optional)**
   - After deployment completes, go to your project settings
   - Under "Domains", add your custom domain
   - Update DNS records to point to Vercel

4. **Environment Variables (If Needed)**
   - In Vercel dashboard, go to Settings → Environment Variables
   - Add any required variables
   - Redeploy if needed

### Automatic Deployments

Once connected to GitHub:
- Every push to `main` branch automatically deploys to production
- Pull requests get preview deployments automatically

## Alternative Deployment Options

### Deploy to Netlify

```bash
npm run build
# Connect to Netlify and upload the .next folder
```

### Docker Deployment

1. **Create Dockerfile:**
```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

2. **Build and run:**
```bash
docker build -t fdp-site .
docker run -p 3000:3000 fdp-site
```

### Self-Hosted (Node.js Server)

1. **Build the project:**
```bash
npm run build
```

2. **Start the production server:**
```bash
npm start
```

3. **Use PM2 for process management:**
```bash
npm install -g pm2
pm2 start "npm start" --name "fdp-site"
pm2 save
pm2 startup
```

## Pre-Deployment Checklist

- [ ] All tests pass: `npm run lint && npm run build`
- [ ] No console errors or warnings
- [ ] Tested on mobile and desktop browsers
- [ ] Updated environment variables if needed
- [ ] Verified all external links are working
- [ ] Security headers are configured (check `vercel.json`)
- [ ] Image optimization is working properly
- [ ] Sitemap and robots.txt are configured (if needed)

## Post-Deployment Verification

1. **Check site accessibility:**
   - [ ] Site loads without errors
   - [ ] Navigation works properly
   - [ ] All sections render correctly
   - [ ] Images load properly
   - [ ] Buttons link to correct URLs

2. **Performance checks:**
   - [ ] Page load time is acceptable
   - [ ] Images are optimized
   - [ ] No console errors
   - [ ] Mobile responsiveness verified

3. **SEO verification:**
   - [ ] Meta tags are present
   - [ ] Open Graph tags work (share on social media)
   - [ ] Favicon displays properly
   - [ ] Schema markup is valid (if implemented)

## Monitoring

### Vercel Analytics
- Monitor performance metrics in Vercel dashboard
- Check error logs and warning

### Error Tracking
- Monitor errors in production
- Set up error notifications if available

## Troubleshooting

### Build fails on Vercel
```
Solution: Check build logs in Vercel dashboard
- Ensure all dependencies are in package.json
- Check for environment variables that may be missing
- Verify Node version compatibility
```

### Images not loading
```
Solution: Check image URLs
- Verify imgur URLs are accessible
- Check image optimization settings in next.config.ts
- Ensure remotePatterns includes correct hostname
```

### Slow performance
```
Solution:
- Enable image optimization (already configured)
- Check Network tab in browser DevTools
- Use Vercel Analytics to identify bottlenecks
- Consider CDN for static assets
```

## Rollback

If deployment has issues:

```bash
# Deploy previous version using Vercel dashboard
# Or manually:
git checkout <previous-commit>
git push origin main
# Vercel will automatically redeploy
```

## Security Notes

- Never commit `.env.local` or sensitive files
- Use Vercel's environment variables for secrets
- Keep dependencies updated (run `npm audit fix`)
- Enable branch protection on GitHub main branch
- Review pull requests before merging

## Cost Considerations

- **Vercel**: Free tier includes generous limits
- **Custom domain**: Usually $10-15/year
- **Advanced features**: Paid plans start at $20/month

## Support

For deployment issues:
1. Check Vercel documentation: https://vercel.com/docs
2. Check Next.js deployment guide: https://nextjs.org/docs/deployment
3. Review GitHub Actions workflow logs
4. Check project Issues section

---

**Questions? Open an issue or check the main README.md for more information.**
