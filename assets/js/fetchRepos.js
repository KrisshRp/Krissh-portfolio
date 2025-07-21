// GitHub Repository Fetcher
document.addEventListener('DOMContentLoaded', function() {
    const githubUsername = 'KrisshRp';
    const projectsContainer = document.getElementById('github-projects');
    const staticProjectsContainer = document.getElementById('static-projects');
    
    // Fallback projects data based on CV
    const fallbackProjects = [
        {
            name: 'E-Commerce-Platform',
            description: 'Full-stack e-commerce solution with Node.js, Express.js, MongoDB, and React. Features include payment integration, inventory management, user authentication, and admin dashboard.',
            language: 'JavaScript',
            languages: ['JavaScript', 'CSS', 'HTML'],
            stars: 28,
            forks: 12,
            html_url: 'https://github.com/KrisshRp',
            category: 'fullstack'
        },
        {
            name: 'AI-Chatbot-System',
            description: 'Intelligent chatbot built with Python, NLP, and machine learning. Integrated with WhatsApp Business API for automated customer support and query resolution.',
            language: 'Python',
            languages: ['Python', 'Jupyter Notebook'],
            stars: 35,
            forks: 15,
            html_url: 'https://github.com/KrisshRp',
            category: 'ai'
        },
        {
            name: 'Blockchain-Voting-System',
            description: 'Decentralized voting platform built with Solidity smart contracts, Web3.js integration, and transparent blockchain-based vote counting system.',
            language: 'Solidity',
            languages: ['Solidity', 'JavaScript', 'HTML'],
            stars: 42,
            forks: 18,
            html_url: 'https://github.com/KrisshRp',
            category: 'blockchain'
        },
        {
            name: 'Web-Automation-Suite',
            description: 'Comprehensive Python automation framework using Selenium, BeautifulSoup for web scraping, data extraction, and automated testing workflows.',
            language: 'Python',
            languages: ['Python', 'Shell'],
            stars: 25,
            forks: 8,
            html_url: 'https://github.com/KrisshRp',
            category: 'automation'
        },
        {
            name: 'Real-Time-Analytics-Dashboard',
            description: 'Interactive dashboard with live data visualization built with React, D3.js, Node.js, Socket.io, and MongoDB for real-time business intelligence.',
            language: 'JavaScript',
            languages: ['JavaScript', 'TypeScript', 'CSS'],
            stars: 31,
            forks: 14,
            html_url: 'https://github.com/KrisshRp',
            category: 'fullstack'
        },
        {
            name: 'ML-Model-Deployment-API',
            description: 'End-to-end machine learning pipeline with FastAPI, Docker containerization, and cloud deployment for serving ML models at scale with monitoring.',
            language: 'Python',
            languages: ['Python', 'Dockerfile', 'YAML'],
            stars: 38,
            forks: 16,
            html_url: 'https://github.com/KrisshRp',
            category: 'ai'
        },
        {
            name: 'Cryptocurrency-Trading-Bot',
            description: 'Automated cryptocurrency trading bot with technical analysis, risk management algorithms, and integration with major exchange APIs like Binance.',
            language: 'Python',
            languages: ['Python', 'Jupyter Notebook'],
            stars: 46,
            forks: 22,
            html_url: 'https://github.com/KrisshRp',
            category: 'blockchain'
        },
        {
            name: 'DevOps-CI-CD-Pipeline',
            description: 'Complete CI/CD pipeline automation with Docker, GitHub Actions, AWS deployment, automated testing, and infrastructure as code using Terraform.',
            language: 'YAML',
            languages: ['YAML', 'Shell', 'Dockerfile'],
            stars: 29,
            forks: 11,
            html_url: 'https://github.com/KrisshRp',
            category: 'automation'
        },
        {
            name: 'Team-Task-Management-System',
            description: 'Collaborative project management platform with MERN stack, real-time updates, team coordination, productivity analytics, and notification system.',
            language: 'JavaScript',
            languages: ['JavaScript', 'TypeScript', 'CSS'],
            stars: 33,
            forks: 13,
            html_url: 'https://github.com/KrisshRp',
            category: 'fullstack'
        },
        {
            name: 'Sentiment-Analysis-Tool',
            description: 'Advanced sentiment analysis tool using NLP techniques, TensorFlow, and Python for social media monitoring and customer feedback analysis.',
            language: 'Python',
            languages: ['Python', 'Jupyter Notebook'],
            stars: 27,
            forks: 9,
            html_url: 'https://github.com/KrisshRp',
            category: 'ai'
        },
        {
            name: 'DeFi-Protocol-Smart-Contracts',
            description: 'Decentralized Finance protocol with yield farming, liquidity pools, and governance tokens built on Ethereum using Solidity and Web3 technologies.',
            language: 'Solidity',
            languages: ['Solidity', 'JavaScript', 'TypeScript'],
            stars: 52,
            forks: 24,
            html_url: 'https://github.com/KrisshRp',
            category: 'blockchain'
        },
        {
            name: 'IoT-Device-Monitoring-System',
            description: 'IoT monitoring system with Python backend, MQTT protocol, real-time data collection, and visualization dashboard for industrial applications.',
            language: 'Python',
            languages: ['Python', 'C++', 'JavaScript'],
            stars: 19,
            forks: 7,
            html_url: 'https://github.com/KrisshRp',
            category: 'automation'
        },
        {
            name: 'Data-Analytics-Research',
            description: 'Statistical analysis and data science research project using R and Python for academic research and business insights.',
            language: 'R',
            languages: ['R', 'Python', 'Jupyter Notebook'],
            stars: 15,
            forks: 5,
            html_url: 'https://github.com/KrisshRp',
            category: 'others'
        },
        {
            name: 'Mobile-App-Backend',
            description: 'REST API backend service for mobile applications built with Go, featuring high performance and scalable architecture.',
            language: 'Go',
            languages: ['Go', 'Dockerfile', 'Makefile'],
            stars: 23,
            forks: 8,
            html_url: 'https://github.com/KrisshRp',
            category: 'others'
        }
    ];
    
    // Category mapping configuration with keywords
    const categoryKeywords = {
        'blockchain': ['blockchain', 'crypto', 'defi', 'nft', 'ethereum', 'bitcoin', 'solidity', 'web3', 'dapp', 'smart-contract', 'token', 'mining', 'wallet', 'exchange', 'cryptocurrency', 'smart contract', 'decentralized', 'consensus', 'trading bot', 'yield farming', 'liquidity', 'rust', 'go'],
        'automation': ['automation', 'automated', 'bot', 'scraper', 'crawler', 'selenium', 'puppeteer', 'devops', 'ci-cd', 'pipeline', 'deploy', 'docker', 'kubernetes', 'ansible', 'terraform', 'jenkins', 'monitoring', 'web scraping', 'data extraction', 'ci/cd', 'continuous integration', 'deployment', 'infrastructure', 'testing', 'workflow', 'bash', 'yaml', 'powershell'],
        'fullstack': ['web', 'boiler plate', 'frontend', 'backend', 'fullstack', 'full-stack', 'webapp', 'website', 'api', 'server', 'client', 'dashboard', 'ecommerce', 'cms', 'portfolio', 'web application', 'react', 'angular', 'vue', 'node', 'express', 'django', 'flask', 'spring', 'rest', 'graphql', 'database', 'mongodb', 'mysql', 'postgresql', 'javascript', 'typescript', 'html', 'css', 'php', 'java', 'c#', 'python', 'ruby'],
        'ai': ['ai', 'ml', 'machine-learning', 'artificial-intelligence', 'neural', 'deep-learning', 'nlp', 'computer-vision', 'tensorflow', 'pytorch', 'sklearn', 'model', 'prediction', 'classification', 'sentiment', 'chatbot', 'opencv', 'machine learning', 'artificial intelligence', 'neural network', 'deep learning', 'natural language processing', 'computer vision', 'data science', 'predictive', 'regression', 'clustering', 'sentiment analysis', 'image recognition', 'text analysis', 'recommendation system', 'python', 'r', 'julia', 'matlab']
    };

    // Category mapping for tech stack
    function getCategoryFromLanguage(language, name, description) {
        // Safely handle null/undefined values
        const safeName = (name || '').toLowerCase();
        const safeDesc = (description || '').toLowerCase();
        const safeLang = (language || '').toLowerCase();
        
        // Combine all text to search through
        const combinedText = `${safeName} ${safeDesc} ${safeLang}`;
        
        // Check each category against the keywords
        for (const [category, keywords] of Object.entries(categoryKeywords)) {
            if (keywords.some(keyword => combinedText.includes(keyword))) {
                return category;
            }
        }
        
        return 'others'; // Default category for unmatched projects
    }
    
    // Create project card HTML
    function createProjectCard(project, delay = 0) {
        // Safely get values with fallbacks
        const name = project.name || 'Untitled Project';
        const description = project.description || 'No description available.';
        const language = project.language || '';
        const languages = project.languages || [];
        const stars = project.stargazers_count || project.stars || 0;
        const forks = project.forks_count || project.forks || 0;
        const url = project.html_url || '#';
        const homepage = project.homepage || null;
        
        const category = project.category || getCategoryFromLanguage(language, name, description);
        
        // Create languages display
        const languagesHTML = languages.length > 0 
            ? `<div class="project-languages">
                 ${languages.map(lang => `<span class="lang-tag">${lang}</span>`).join('')}
               </div>`
            : (language ? `<div class="project-languages"><span class="lang-tag">${language}</span></div>` : '');
        
        return `
            <div class="col-xl-4 col-lg-6 col-md-6 grid-item ${category}" style="animation-delay: ${delay}s">
                <div class="github-project-card scale-animation" data-delay="${delay}" data-duration="2">
                    <div class="project-header">
                        <h3 class="project-title">${name.replace(/-/g, ' ')}</h3>
                    </div>
                    <p class="project-description">${description}</p>
                    ${languagesHTML}
                    <div class="project-stats">
                        <div class="stat-item">
                            <i class="fas fa-star"></i>
                            <span>${stars}</span>
                        </div>
                        <div class="stat-item">
                            <i class="fas fa-code-branch"></i>
                            <span>${forks}</span>
                        </div>
                    </div>
                    <div class="project-links">
                        <a href="${url}" target="_blank" class="project-link primary">
                            <i class="fab fa-github"></i> View Code
                        </a>
                        ${homepage ? `<a href="${homepage}" target="_blank" class="project-link">
                            <i class="fas fa-external-link-alt"></i> Live Demo
                        </a>` : ''}
                    </div>
                </div>
            </div>
        `;
    }
    
    // Fetch languages for a repository
    async function fetchRepoLanguages(repoName) {
        try {
            const response = await fetch(`https://api.github.com/repos/${githubUsername}/${repoName}/languages`);
            if (response.ok) {
                const languages = await response.json();
                // Return top 3 languages by bytes of code
                return Object.keys(languages)
                    .sort((a, b) => languages[b] - languages[a])
                    .slice(0, 3);
            }
        } catch (error) {
            console.log(`Failed to fetch languages for ${repoName}:`, error.message);
        }
        return [];
    }
    
    // Fetch repositories from GitHub API
    async function fetchGitHubRepos() {
        try {
            // Show loading message
            projectsContainer.innerHTML = '<div class="loading-projects"><p>Loading projects from GitHub...</p></div>';
            
            const response = await fetch(`https://api.github.com/users/${githubUsername}/repos?sort=pushed&direction=desc&per_page=12`);
            
            if (!response.ok) {
                throw new Error(`GitHub API responded with status: ${response.status}`);
            }
            
            const repos = await response.json();
            
            // Filter out forked repositories and ensure we have valid data
            const originalRepos = repos
                .filter(repo => !repo.fork && !repo.name.includes('.github') && repo.name)
                .sort((a, b) => (b.stargazers_count || 0) - (a.stargazers_count || 0))
                .slice(0, 9); // Limit to 9 projects to fit grid nicely
            
            if (originalRepos.length === 0) {
                throw new Error('No public repositories found');
            }
            
            // Generate project cards with languages
            let projectsHTML = '';
            
            // Fetch languages for each repo and create cards
            const repoPromises = originalRepos.map(async (repo, index) => {
                // Fetch languages for this repository
                const languages = await fetchRepoLanguages(repo.name);
                
                console.log(repo);
                
                // Ensure repo has required properties
                const safeRepo = {
                    name: repo.name || 'Untitled Project',
                    description: repo.description || 'No description available.',
                    language: repo.language || 'Unknown',
                    languages: languages,
                    stargazers_count: repo.stargazers_count || 0,
                    forks_count: repo.forks_count || 0,
                    html_url: repo.html_url || '#',
                    homepage: repo.homepage || null
                };
                
                return {
                    html: createProjectCard(safeRepo, index * 0.1),
                    index: index
                };
            });
            
            // Wait for all language fetches to complete
            const projectCards = await Promise.all(repoPromises);
            
            // Sort by original index and combine HTML
            projectsHTML = projectCards
                .sort((a, b) => a.index - b.index)
                .map(card => card.html)
                .join('');
            
            projectsContainer.innerHTML = projectsHTML;
            
            // Show static projects after GitHub projects
            showStaticProjects();
            
            // Initialize portfolio filtering after projects are loaded
            if (typeof initPortfolioFilter === 'function') {
                setTimeout(initPortfolioFilter, 500);
            }
            
            console.log(`Successfully loaded ${originalRepos.length} GitHub repositories`);
            
        } catch (error) {
            console.log('GitHub API failed, using fallback projects:', error.message);
            displayFallbackProjects();
        }
    }
    
    // Display fallback projects
    function displayFallbackProjects() {
        let projectsHTML = '';
        fallbackProjects.forEach((project, index) => {
            projectsHTML += createProjectCard(project, index * 0.1);
        });
        
        projectsContainer.innerHTML = projectsHTML;
        
        // Show static projects after fallback projects
        showStaticProjects();
        
        // Initialize portfolio filtering
        if (typeof initPortfolioFilter === 'function') {
            setTimeout(initPortfolioFilter, 500);
        }
    }
    
    // Show static projects
    function showStaticProjects() {
        if (staticProjectsContainer) {
            staticProjectsContainer.style.display = 'block';
        }
    }
    
    // Initialize
    if (projectsContainer) {
        fetchGitHubRepos();
    }
});
