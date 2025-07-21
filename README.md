# Krishnendu Saha - Portfolio Website

A modern, responsive portfolio website featuring dynamic GitHub integration, intelligent project categorization, and a sleek dark theme design.

## 🚀 Features

- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dynamic GitHub Integration**: Automatically fetches and displays your GitHub repositories with real-time language detection
- **Intelligent Project Categorization**: AI/ML, Blockchain, Automation, Full-Stack, and Others categories with keyword-based classification
- **Language Display**: Shows top 3 programming languages for each repository with beautiful tags
- **Dual Project Display**: Dynamic GitHub repos at the top, followed by curated static projects
- **Robust Fallback System**: Comprehensive fallback projects when GitHub API is unavailable
- **Modern UI**: Clean, professional design with smooth animations and hover effects
- **Dark Theme**: Sleek dark theme with proper contrast ratios
- **Static Hosting Ready**: Fully compatible with GitHub Pages and other static hosting platforms

## 📁 File Structure

```
My-portfolio-new/
├── index.html                 # Main HTML file with enhanced project section
├── assets/
│   ├── css/
│   │   ├── main.css          # Main styling with language tags and GitHub project cards
│   │   ├── theme.css         # Theme and custom styles
│   │   ├── assets.css        # Additional assets
│   │   ├── color.css         # Color schemes
│   │   └── normalize.css     # CSS normalization
│   ├── js/
│   │   ├── main.js          # Main JavaScript functionality
│   │   ├── fetchRepos.js    # Enhanced GitHub API integration with language detection
│   │   ├── age-calculator.js # Dynamic age calculation
│   │   ├── jquery.js        # jQuery library
│   │   ├── plugins.js       # Additional plugins
│   │   └── map.js           # Map functionality
│   └── images/
│       ├── logo.png         # Your logo
│       ├── profile.jpg      # Your profile picture
│       ├── bg.jpg          # Background image
│       ├── works/          # Project screenshots
│       └── clients/        # Client logos
├── icon-fonts/             # Font icons (FontAwesome, Flaticon)
│   ├── font-awesome/       # FontAwesome icons
│   └── flat-icon/          # Flaticon icons
└── README.md              # This documentation
```

## 🔧 Setup Instructions

### 1. Clone and Customize
```bash
git clone https://github.com/KrisshRp/portfolio.git
cd portfolio
```

### 2. Personal Information Updates
- Update contact details in `index.html` (email, phone, social links)
- Replace profile image at `assets/images/logo.png`
- Modify the hero section with your information
- Update skills percentages in the skills section

### 3. GitHub Integration Setup
The website automatically fetches repositories from GitHub. To customize:

**In `assets/js/fetchRepos.js`:**
```javascript
const githubUsername = 'YourGitHubUsername'; // Change this to your username
```

**Features of the GitHub integration:**
- Fetches top 9 repositories by stars
- Displays top 3 programming languages per repo
- Intelligent categorization (AI/ML, Blockchain, Automation, Full-Stack, Others)
- Robust fallback system with 15+ predefined projects
- Real-time language detection via GitHub Languages API

### 4. Project Categories Customization
Modify the keyword mapping in `fetchRepos.js` to adjust how projects are categorized:
```javascript
const categoryKeywords = {
    'ai': ['ai', 'ml', 'machine-learning', 'tensorflow', 'pytorch'],
    'blockchain': ['blockchain', 'crypto', 'solidity', 'web3'],
    'automation': ['automation', 'bot', 'devops', 'ci-cd'],
    'fullstack': ['web', 'react', 'node', 'express', 'api']
};
```

### 5. Hosting on GitHub Pages

1. **Create a new repository** on GitHub (can be named anything, e.g., `portfolio`)
2. **Upload all files** to the repository
3. **Enable GitHub Pages**:
   - Go to repository Settings
   - Scroll to "Pages" section
   - Select "Deploy from a branch"
   - Choose "main" branch and "/ (root)" folder
   - Save

Your website will be available at `https://your-username.github.io/repository-name`

## 🎨 Customization Guide

### Color Scheme
Edit `assets/css/color.css` to change the color palette:
```css
:root {
  --primary-color: #your-color;
  --accent-color: #your-accent;
}
```

### Skills & Experience
- Update skills percentages in `index.html` (lines 450-600)
- Modify experience timeline entries
- Add or remove skill categories

### Services Section
Customize the "What I do" section with your services (lines 150-200 in `index.html`).

### Language Tags Styling
Modify language tag appearance in `assets/css/main.css`:
```css
.lang-tag {
  background: rgba(255, 255, 255, 0.1);
  /* Customize colors, padding, border-radius */
}
```

### Contact Form
The contact form currently points to `contact.php`. For GitHub Pages:
- Use services like Formspree, Netlify Forms, or EmailJS
- Update the form action in the contact section

## 🌟 Key Features Breakdown

### Dynamic GitHub Integration
- **Real-time Repository Fetching**: Automatically pulls your latest repositories
- **Language Detection**: Shows top 3 programming languages per project
- **Smart Categorization**: Uses keyword matching to categorize projects
- **Fallback System**: 15+ curated projects when GitHub API is unavailable
- **Dual Display**: GitHub repos first, then static showcase projects

### Project Categories
- **AI/ML**: Machine learning, data science, neural networks
- **Blockchain**: Crypto, DeFi, smart contracts, Web3
- **Automation**: DevOps, CI/CD, bots, web scraping
- **Full-Stack**: Web applications, APIs, databases
- **Others**: Everything else not fitting above categories

### Enhanced UI Components
- **Language Tags**: Beautiful, hoverable tags showing tech stack
- **Project Cards**: Animated cards with stats and links
- **Responsive Grid**: Adaptive layout for all screen sizes
- **Loading States**: Smooth loading animations and states

## 🔧 Technical Implementation

### GitHub API Integration
```javascript
// Fetches repositories with language data
const repos = await fetch(`https://api.github.com/users/${username}/repos`);
const languages = await fetch(`https://api.github.com/repos/${username}/${repo}/languages`);
```

### Category Classification
```javascript
// Intelligent keyword-based categorization
function getCategoryFromLanguage(language, name, description) {
  const combinedText = `${name} ${description} ${language}`.toLowerCase();
  // Match against predefined keywords for each category
}
```

### Fallback Project System
- Comprehensive fallback data with realistic GitHub-style information
- Includes stars, forks, languages, and project URLs
- Ensures website never shows empty states

## 🔧 Technical Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with Flexbox/Grid, CSS animations
- **Icons**: FontAwesome 6, Flaticon
- **APIs**: GitHub REST API (Repositories, Languages)
- **Libraries**: jQuery, custom animation libraries
- **Hosting**: GitHub Pages compatible, static hosting ready
- **Performance**: Optimized images, lazy loading, efficient API calls

## 📱 Responsive Design

- **Desktop**: 1200px+ (4-column grid, full features)
- **Tablet**: 768px-1199px (2-column grid, touch-friendly)
- **Mobile**: <768px (1-column stack, mobile navigation)

## 🚀 Performance Features

### GitHub API Optimization
- **Rate Limiting**: Handles API limits gracefully
- **Parallel Requests**: Fetches language data concurrently
- **Error Handling**: Comprehensive error handling with fallbacks
- **Caching Ready**: Architecture supports future caching implementation

### Loading Performance
- **Async Loading**: Non-blocking GitHub API calls
- **Progressive Enhancement**: Works without JavaScript
- **Optimized Images**: Compressed assets for faster loading
- **Minimal Dependencies**: Lightweight, essential libraries only

## 🐛 Troubleshooting

### GitHub API Issues
**Rate Limiting**: GitHub API has rate limits (60 requests/hour for unauthenticated)
- **Solution**: Website automatically falls back to curated projects
- **Enhancement**: Add Personal Access Token for higher limits (5000/hour)

**Network Issues**: API calls may fail due to network problems
- **Solution**: Comprehensive error handling with fallback projects
- **User Experience**: Loading states and error messages

### Display Issues
**Languages Not Showing**: If language tags don't appear
- Check browser console for API errors
- Verify GitHub username in `fetchRepos.js`
- Ensure repositories are public

**Projects Not Loading**: If no projects appear
- Check GitHub username configuration
- Verify internet connection
- Check browser console for JavaScript errors

### Hosting Issues
**GitHub Pages**: If website doesn't load on GitHub Pages
- Ensure all file paths are relative (no absolute paths)
- Check that `index.html` is in the root directory
- Verify all assets are properly linked

## 📈 Future Enhancements

### Planned Features
- [ ] Personal Access Token integration for higher API limits
- [ ] Project search and filtering
- [ ] Blog section integration
- [ ] Contact form with backend integration
- [ ] Light/Dark theme toggle
- [ ] Analytics integration
- [ ] SEO optimization
- [ ] PWA (Progressive Web App) features

### API Enhancements
- [ ] Repository commit activity graphs
- [ ] Contributor statistics
- [ ] Repository creation dates
- [ ] Technology trend analysis

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## ⭐ Acknowledgments

- **FontAwesome** for the comprehensive icon library
- **GitHub API** for repository data
- **Flaticon** for additional icons
- **Google Fonts** for typography

---

**Created by Krishnendu Saha** - *Silent Mogul. Mastermind Builder.*

🔗 **Live Demo**: [Your Portfolio URL]
📧 **Contact**: [Your Email]
💼 **LinkedIn**: [Your LinkedIn]
🐱 **GitHub**: [Your GitHub]
