# GitHub Pages Deployment Guide

## Quick Setup for GitHub Pages

### 1. Create Repository
1. Go to GitHub and create a new repository
2. Name it `your-username.github.io` (replace with your actual username)
3. Make it public
4. Don't initialize with README (we already have files)

### 2. Upload Files
You can either:

**Option A: Using Git Command Line**
```bash
git init
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git remote add origin https://github.com/your-username/your-username.github.io.git
git push -u origin main
```

**Option B: Using GitHub Web Interface**
1. Go to your repository
2. Click "uploading an existing file"
3. Drag and drop all files from this folder
4. Commit changes

### 3. Enable GitHub Pages
1. Go to repository Settings
2. Scroll to "Pages" section
3. Under "Source", select "Deploy from a branch"
4. Choose "main" branch and "/ (root)" folder
5. Click Save

### 4. Access Your Website
Your website will be available at: `https://your-username.github.io`

## Pre-Deployment Checklist

- [ ] Update all personal information in `index.html`
- [ ] Replace placeholder images with your actual photos
- [ ] Add your logo to `assets/images/logo.png`
- [ ] Update GitHub username in `assets/js/fetchRepos.js`
- [ ] Test the website locally by opening `index.html` in a browser
- [ ] Verify all links work correctly
- [ ] Check responsive design on mobile devices

## Custom Domain (Optional)

If you have a custom domain:

1. Add a `CNAME` file in the root directory with your domain name
2. Configure DNS settings with your domain provider
3. Update GitHub Pages settings to use custom domain

## Troubleshooting

### Images Not Showing
- Ensure image paths start with `assets/images/`
- Check file extensions match exactly
- Verify images are uploaded to correct folder

### JavaScript Errors
- Open browser Developer Tools (F12)
- Check Console for errors
- Ensure all script files are in `assets/js/` folder

### GitHub API Rate Limits
- The site will automatically show fallback projects if API limits are hit
- Consider adding a personal access token for higher limits

## Updates and Maintenance

To update your portfolio:
1. Make changes to files locally
2. Test changes by opening `index.html` in browser
3. Upload updated files to GitHub repository
4. Changes will automatically deploy to your live site

## Performance Tips

1. **Optimize Images**: Compress images to reduce loading time
2. **Enable Caching**: GitHub Pages automatically handles this
3. **Monitor Loading Speed**: Use tools like Google PageSpeed Insights

---

**Your portfolio is ready to go live! 🚀**
