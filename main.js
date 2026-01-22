// =========================================
// 1. CERTIFICATIONS DATA
// =========================================
const certifications = [
    {
        title: "5-Day AI Agents Intensive Course",
        org: "Google",
        orgIcon: "fab fa-google",
        date: "Dec 2025",
        categories: ["ai"],
        tags: ["AI", "ML", "Agents"],
        link: "https://www.kaggle.com/certification/badges/aditya88103/105"
    },
    {
        title: "Microsoft Power BI",
        org: "SkillCourse",
        orgIcon: "fas fa-graduation-cap",
        date: "Dec 2025",
        categories: ["business-intel", "data-analytics"],
        tags: ["Power BI", "Dashboards"],
        link: "https://exam.skillcourse.in/student/view_certificate?uid=SC-2210FA6817"
    },
    {
        title: "SQL Course (Self Learning)",
        org: "SkillCourse",
        orgIcon: "fas fa-graduation-cap",
        date: "Dec 2025",
        categories: ["sql", "data-analytics"],
        tags: ["SQL", "Database"],
        link: "https://exam.skillcourse.in/student/view_certificate?uid=SC-BE89525F89"
    },
    {
        title: "Introduction to Data Science",
        org: "Cisco Networking Academy",
        orgIcon: "fas fa-network-wired",
        date: "Nov 2025",
        categories: ["data-analytics", "python"],
        tags: ["Data Science", "Python"],
        link: "https://drive.google.com/file/d/1Kz2vh3jObmwQ4zJR4FCSoTXq8AKiY1fL/view?usp=sharing"
    },
    {
        title: "Walmart USA – Advanced Software Engineering Job Simulation",
        org: "Walmart USA",
        orgIcon: "fas fa-store",
        date: "Nov 2025",
        categories: ["python"],
        tags: ["Software Engineering"],
        link: "https://www.theforage.com/completion-certificates/prBZoAihniNijyD6d/oX6f9BbCL9kJDJzfg_prBZoAihniNijyD6d_iX4kEYHdQhs8JLNE9_1763560604237_completion_certificate.pdf"
    },
    {
        title: "Become a Data Analyst",
        org: "LinkedIn Learning",
        orgIcon: "fab fa-linkedin",
        date: "Sep 2025",
        categories: ["data-analytics"],
        tags: ["Data Analysis", "Career"],
        link: "https://www.linkedin.com/learning/certificates/3f2a1b4f57adc11a48a88a758e12915c81e822483670557e6be6e2f2bc58751e?trk=share_certificate"
    },
    {
        title: "Career Essentials in Data Analysis",
        org: "Microsoft & LinkedIn",
        orgIcon: "fab fa-microsoft",
        date: "Sep 2025",
        categories: ["data-analytics"],
        tags: ["Data Analysis", "Career"],
        link: "https://www.linkedin.com/learning/certificates/f7534ebb1127faf10c7f74ed6952d920c3a72a5f5cfb14464b26de20e669a3ca"
    },
    {
        title: "Career Essentials in Generative AI",
        org: "Microsoft & LinkedIn",
        orgIcon: "fab fa-microsoft",
        date: "Sep 2025",
        categories: ["ai"],
        tags: ["Generative AI", "Career"],
        link: "https://www.linkedin.com/learning/certificates/efb9214a19e597378c3436e8fe582e861898725909c6fdb6998bf1aa3ce1878e"
    },
    {
        title: "Complete Guide to Excel Statistics with Copilot",
        org: "LinkedIn",
        orgIcon: "fab fa-linkedin",
        date: "Sep 2025",
        categories: ["data-analytics"],
        tags: ["Excel", "Statistics"],
        link: "https://www.linkedin.com/learning/certificates/f2f60cf62926d0ddab4f1bc20b43e2649f20a8cd8220c51d7f17f107a223924e"
    },
    {
        title: "Complete Guide to R: Wrangling, Visualizing, and Modeling Data",
        org: "PMI",
        orgIcon: "fas fa-certificate",
        date: "Sep 2025",
        categories: ["data-analytics"],
        tags: ["R", "Visualization", "Modeling"],
        link: "https://www.linkedin.com/learning/certificates/f9257dbdbe7d21283e876e2e282f093d3b28300c079641a68bc370ce75f61eb5"
    },
    {
        title: "Data Cleaning in Python",
        org: "LinkedIn",
        orgIcon: "fab fa-linkedin",
        date: "Sep 2025",
        categories: ["python", "data-analytics"],
        tags: ["Python", "Data Cleaning"],
        link: "https://www.linkedin.com/learning/certificates/371c37baecef99b8e613526201d89f62a7c2252a072dd8445bb2098358fb2465"
    },
    {
        title: "Data Literacy: Exploring and Describing Data",
        org: "LinkedIn",
        orgIcon: "fab fa-linkedin",
        date: "Sep 2025",
        categories: ["data-analytics"],
        tags: ["Data Literacy"],
        link: "https://www.linkedin.com/learning/certificates/4fd2ea3a1c0b71a2365870f45662089a1c0b27a86adfba98b68fa01028c44a78"
    },
    {
        title: "Ethics in the Age of Generative AI",
        org: "LinkedIn",
        orgIcon: "fab fa-linkedin",
        date: "Sep 2025",
        categories: ["ai"],
        tags: ["Ethics", "AI"],
        link: "https://www.linkedin.com/learning/certificates/040953fa1a902d942a8986a595fa4b74fceeeec245a2b11e92b7e7aa9332dd2a"
    },
    {
        title: "Excel Essential Training (Microsoft 365)",
        org: "LinkedIn",
        orgIcon: "fab fa-linkedin",
        date: "Sep 2025",
        categories: ["data-analytics",],
        tags: ["Excel"],
        link: "https://www.linkedin.com/learning/certificates/324e224ecbb6c3c9c0bf62ed0045abc2a4bc36f942d05ccee7eca2777538a443"
    },
    {
        title: "Introduction to Artificial Intelligence",
        org: "LinkedIn",
        orgIcon: "fab fa-linkedin",
        date: "Sep 2025",
        categories: ["ai"],
        tags: ["AI", "ML"],
        link: "https://www.linkedin.com/learning/certificates/1505e870f04a623d8f140629760a7707c130ed66b2f3647a03bbf1b1e0659f50"
    },
    {
        title: "Introduction to Career Skills in Data Analytics",
        org: "LinkedIn",
        orgIcon: "fab fa-linkedin",
        date: "Sep 2025",
        categories: ["data-analytics"],
        tags: ["Data Analytics", "Career"],
        link: "https://www.linkedin.com/learning/certificates/9990d71dc2183aa595320e55a8355b9dbca06e3d90b3cc29d1429914c0248e5a"
    },
    {
        title: "Learning Data Analytics: Foundations",
        org: "LinkedIn",
        orgIcon: "fab fa-linkedin",
        date: "Sep 2025",
        categories: ["data-analytics"],
        tags: ["Data Analytics"],
        link: "https://www.linkedin.com/learning/certificates/5b6a90b08746ced03dae8b772eb2f8f98d3bb9c5211dfb0797183661ab49b959"
    },
    {
        title: "Learning Data Analytics Part 2",
        org: "LinkedIn",
        orgIcon: "fab fa-linkedin",
        date: "Sep 2025",
        categories: ["data-analytics"],
        tags: ["Data Analytics"],
        link: "https://www.linkedin.com/learning/certificates/f616e10d89469a9f00cf271dd93299ae189d2b250619d64ca988b0924b0bb2a3"
    },
    {
        title: "Learning Data Visualization",
        org: "LinkedIn",
        orgIcon: "fab fa-linkedin",
        date: "Sep 2025",
        categories: ["data-analytics", "business-intel"],
        tags: ["Data Visualization"],
        link: "https://www.linkedin.com/learning/certificates/9838ffff91f81f2ee038b163307a265ee894335caf227429f4a27fe9685e945b"
    },
    {
        title: "Learning Excel: Data Analysis",
        org: "LinkedIn",
        orgIcon: "fab fa-linkedin",
        date: "Sep 2025",
        categories: ["data-analytics",],
        tags: ["Excel", "Data Analysis"],
        link: "https://www.linkedin.com/learning/certificates/bd967e8efd53f9752c26899c4ba6f0de42be356091140ce52249d111f076a950"
    },
    {
        title: "Power BI",
        org: "LinkedIn",
        orgIcon: "fab fa-linkedin",
        date: "Sep 2025",
        categories: ["business-intel", "data-analytics"],
        tags: ["Power BI"],
        link: "https://www.linkedin.com/learning/certificates/be1930dcf8501d0789f746685484b8b08ed3148bed4317ecf00160e2f640d65e?trk=share_certificate"
    },
    {
        title: "Power BI Essential Training (2024)",
        org: "LinkedIn",
        orgIcon: "fab fa-linkedin",
        date: "Sep 2025",
        categories: ["business-intel", "data-analytics"],
        tags: ["Power BI"],
        link: "https://www.linkedin.com/learning/certificates/39d7c0a406ecb7eb142ae244d970bc1792e2e1d9aac7b59154782ba88ab8edd4"
    },
    {
        title: "Predictive Analytics Essential Training: Data Mining",
        org: "IIBA",
        orgIcon: "fas fa-chart-line",
        date: "Sep 2025",
        categories: ["ai"],
        tags: ["Predictive Analytics", "ML"],
        link: "https://www.linkedin.com/learning/certificates/2af256ecc54ba3ca21933f93834e96bb2dd853f0c8464df961ab23f93ff08cd5"
    },
    {
        title: "SQL: Data Reporting and Analysis",
        org: "LinkedIn",
        orgIcon: "fab fa-linkedin",
        date: "Sep 2025",
        categories: ["sql", "data-analytics"],
        tags: ["SQL", "Reporting"],
        link: "https://www.linkedin.com/learning/certificates/d2635d4135da168855ef7e4dca1467e5bdf4791ef667a46eb6ebe813bc556c95"
    },
    {
        title: "Tableau 2024.1: Essential Training",
        org: "LinkedIn",
        orgIcon: "fab fa-linkedin",
        date: "Sep 2025",
        categories: ["business-intel", "data-analytics"],
        tags: ["Tableau", "Data Visualization"],
        link: "https://www.linkedin.com/learning/certificates/92ae20715a38fef7101f8de4987cbef6f5372e44d6d540752e74e3fe9de90948"
    },
    {
        title: "Tata – GenAI Powered Data Analytics Job Simulation",
        org: "Tata Group",
        orgIcon: "fas fa-building",
        date: "Sep 2025",
        categories: ["ai", "data-analytics"],
        tags: ["GenAI", "Analytics"],
        link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_iX4kEYHdQhs8JLNE9_1758438951174_completion_certificate.pdf"
    },
    {
        title: "The Non-Technical Skills of Effective Data Scientists",
        org: "NASBA",
        orgIcon: "fas fa-user-tie",
        date: "Sep 2025",
        categories: ["ai"],
        tags: ["Soft Skills"],
        link: "https://www.linkedin.com/learning/certificates/03c35f76a565528fdbffc8af6aac7683f9d844a58e8224f22883e09da2d8166c"
    },
    {
        title: "Deloitte Australia – Data Analytics Job Simulation",
        org: "Deloitte Australia",
        orgIcon: "fas fa-briefcase",
        date: "Jun 2025",
        categories: ["data-analytics"],
        tags: ["Data Analytics", "Tableau"],
        link: "https://www.theforage.com/completion-certificates/9PBTqmSxAf6zZTseP/io9DzWKe3PTsiS6GG_9PBTqmSxAf6zZTseP_iX4kEYHdQhs8JLNE9_1750680687208_completion_certificate.pdf"
    },
    {
        title: "Data Analysis with Python",
        org: "Cognitive Class (IBM)",
        orgIcon: "fab fa-python",
        date: "Mar 2025",
        categories: ["python", "data-analytics"],
        tags: ["Python", "Pandas"],
        link: "https://courses.cognitiveclass.ai/certificates/7975a4c3cc4647ca8f71a2646f57fbe8"
    },
    {
        title: "Python 101 for Data Science",
        org: "IBM",
        orgIcon: "fab fa-python",
        date: "Feb 2025",
        categories: ["python", "data-analytics"],
        tags: ["Python", "Data Science"],
        link: "https://courses.cognitiveclass.ai/certificates/36bd4d079e1e4a57aa3c6c89a7d0223d"
    },
    {
        title: "Career Essentials in Software Development",
        org: "Microsoft & LinkedIn",
        orgIcon: "fab fa-microsoft",
        date: "Jun 2024",
        categories: ["python"],
        tags: ["Software Development"],
        link: "https://www.linkedin.com/learning/certificates/c70391addcf2cb1bf5aaf84074da74a43786f13f8e427f88e2d97dfb34734f20"
    },
    {
        title: "Introduction to Career Skills in Software Development",
        org: "LinkedIn",
        orgIcon: "fab fa-linkedin",
        date: "Jun 2024",
        categories: ["python"],
        tags: ["Software Devlopment", "Career"],
        link: "https://www.linkedin.com/learning/certificates/64018c6fc57f5028bb528e9e26052ebdc0b234bb649d28b9c1f6f15a9f4762cc"
    }
];

// =========================================
// 2. SPOTLIGHT EFFECT ON CARDS
// =========================================
const spotlightCards = document.querySelectorAll('.spotlight-card, .featured-skill-card');

spotlightCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// =========================================
// 3. TEXT CYCLING - TYPEWRITER EFFECT
// =========================================
const roles = ["Data Analyst", "Business Analyst", "AI Enthusiast", "Power BI Developer", "Python Developer", "Analytics Engineer"];
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const roleElement = document.getElementById('role-text');
const typingSpeed = 100;
const deletingSpeed = 50;
const pauseDelay = 2000;

function typeWriter() {
    if (!roleElement) return;

    const currentRole = roles[roleIndex];

    if (isDeleting) {
        roleElement.innerText = currentRole.substring(0, charIndex - 1);
        charIndex--;
    } else {
        roleElement.innerText = currentRole.substring(0, charIndex + 1);
        charIndex++;
    }

    let speed = isDeleting ? deletingSpeed : typingSpeed;

    if (!isDeleting && charIndex === currentRole.length) {
        // Finished typing, pause then start deleting
        speed = pauseDelay;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        // Finished deleting, move to next role
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        speed = 300;
    }

    setTimeout(typeWriter, speed);
}

// Start typewriter effect
if (roleElement) {
    typeWriter();
}

// =========================================
// 4. SCROLL ANIMATIONS
// =========================================
const observerOptions = {
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.fade-in-up, .fade-in-left, .fade-in-right').forEach(el => {
    observer.observe(el);
});

// =========================================
// 5. MODAL LOGIC
// =========================================
window.openModal = function (id) {
    const modal = document.getElementById(id);
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

window.closeModal = function (id) {
    const modal = document.getElementById(id);
    modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
window.onclick = function (event) {
    if (event.target.classList.contains('modal')) {
        event.target.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// =========================================
// 6. THEME TOGGLE
// =========================================
const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle.querySelector('i');

// Check for saved theme preference or default to 'dark'
const currentTheme = localStorage.getItem('theme') || 'dark';
if (currentTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.classList.remove('fa-moon');
    themeIcon.classList.add('fa-sun');
}

themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');

    // Update icon
    if (document.body.classList.contains('light-theme')) {
        themeIcon.classList.remove('fa-moon');
        themeIcon.classList.add('fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        themeIcon.classList.remove('fa-sun');
        themeIcon.classList.add('fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});

// =========================================
// 7. CERTIFICATIONS RENDERING & FILTERING
// =========================================
const certGrid = document.getElementById('cert-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Category definitions with icons and display names
const categoryConfig = {
    'data-analytics': { name: 'Data Analytics', icon: 'fas fa-chart-line' },
    'ai': { name: 'AI & ML', icon: 'fas fa-robot' },
    'powerbi': { name: 'Power BI', icon: 'fas fa-chart-bar' },
    'python': { name: 'Python', icon: 'fab fa-python' },
    'sql': { name: 'SQL', icon: 'fas fa-database' },
    'business-intel': { name: 'BI Tools', icon: 'fas fa-chart-pie' }
};

// Group certifications by category
function groupCertificationsByCategory() {
    const grouped = {};

    // Initialize all categories
    Object.keys(categoryConfig).forEach(cat => {
        grouped[cat] = [];
    });

    // Group certifications - each cert goes into its primary category
    certifications.forEach(cert => {
        cert.categories.forEach(cat => {
            if (grouped[cat]) {
                // Avoid duplicates
                if (!grouped[cat].find(c => c.title === cert.title)) {
                    grouped[cat].push(cert);
                }
            }
        });
    });

    return grouped;
}

// Render certifications grouped by category with expandable sections
function renderCertifications() {
    certGrid.innerHTML = '';
    const grouped = groupCertificationsByCategory();

    Object.keys(categoryConfig).forEach(categoryKey => {
        const config = categoryConfig[categoryKey];
        const certs = grouped[categoryKey];

        if (certs.length === 0) return; // Skip empty categories

        // Create category section
        const categorySection = document.createElement('div');
        categorySection.className = 'cert-category-section fade-in-up';
        categorySection.setAttribute('data-category', categoryKey);

        categorySection.innerHTML = `
            <div class="cert-category-header">
                <div class="cert-category-left">
                    <div class="cert-category-icon"><i class="${config.icon}"></i></div>
                    <div class="cert-category-info">
                        <h3 class="cert-category-name">${config.name}</h3>
                        <span class="cert-category-count">${certs.length} Certificate${certs.length > 1 ? 's' : ''}</span>
                    </div>
                </div>
                <div class="cert-expand-icon">
                    <i class="fas fa-chevron-down"></i>
                </div>
            </div>
            <div class="cert-category-content">
                <div class="cert-list">
                    ${certs.map(cert => `
                        <div class="cert-item">
                            <div class="cert-item-header">
                                <div class="cert-item-logo"><i class="${cert.orgIcon}"></i></div>
                                <div class="cert-item-info">
                                    <h4 class="cert-item-title">${cert.title}</h4>
                                    <div class="cert-item-meta">
                                        <span class="cert-item-org">${cert.org}</span>
                                        <span class="cert-item-date"><i class="fas fa-calendar"></i> ${cert.date}</span>
                                    </div>
                                </div>
                            </div>
                            <div class="cert-item-tags">
                                ${cert.tags.map(tag => `<span class="cert-tag">${tag}</span>`).join('')}
                            </div>
                            <a href="${cert.link || '#'}" target="_blank" class="cert-link hover-trigger"><i class="fas fa-external-link-alt"></i> View Credential</a>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;

        certGrid.appendChild(categorySection);
        observer.observe(categorySection);

        // Add click event for category toggle
        const header = categorySection.querySelector('.cert-category-header');
        header.addEventListener('click', () => {
            // Toggle current category
            categorySection.classList.toggle('expanded');
        });
    });
}

// Filter logic
if (filterBtns.length > 0) {
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter cards
            const cards = document.querySelectorAll('.cert-card');
            cards.forEach(card => {
                const categories = card.getAttribute('data-categories');
                if (filter === 'all' || categories.includes(filter)) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            });
        });
    });
}

// Initialize certifications
renderCertifications();

// =========================================
// 8. CORE TECHNOLOGIES - ALWAYS VISIBLE GRID
// =========================================
// Categories are now always visible, no collapsing logic needed.
// Skills-tech-grid has 'always-visible' class for display.

// =========================================
// 9. PARTICLE CANVAS ANIMATION (GLOBAL)
// =========================================
const canvas = document.getElementById('particle-canvas');
if (canvas) {
    const ctx = canvas.getContext('2d');
    let particles = [];
    let animationId;
    let mouseX = 0;
    let mouseY = 0;

    // Resize canvas to full viewport
    function resizeCanvas() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    // Particle class
    class Particle {
        constructor() {
            this.reset();
        }

        reset() {
            this.x = Math.random() * canvas.width;
            this.y = Math.random() * canvas.height;
            this.size = Math.random() * 2.5 + 0.5;
            this.speedX = (Math.random() - 0.5) * 0.3;
            this.speedY = (Math.random() - 0.5) * 0.3;
            this.opacity = Math.random() * 0.5 + 0.1;
            this.fadeDirection = Math.random() > 0.5 ? 1 : -1;
            this.hue = Math.random() * 60; // For color variation
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;

            // Gentle mouse attraction
            const dx = mouseX - this.x;
            const dy = mouseY - this.y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 150) {
                this.x += dx * 0.002;
                this.y += dy * 0.002;
            }

            // Fade in/out
            this.opacity += this.fadeDirection * 0.003;
            if (this.opacity >= 0.6) this.fadeDirection = -1;
            if (this.opacity <= 0.1) this.fadeDirection = 1;

            // Wrap around edges
            if (this.x < 0) this.x = canvas.width;
            if (this.x > canvas.width) this.x = 0;
            if (this.y < 0) this.y = canvas.height;
            if (this.y > canvas.height) this.y = 0;
        }

        draw() {
            const isLight = document.body.classList.contains('light-theme');
            let color;
            if (isLight) {
                // Light theme: soft blues and purples
                color = `hsla(${210 + this.hue}, 80%, 55%, ${this.opacity})`;
            } else {
                // Dark theme: cyan and purple tones
                color = `hsla(${180 + this.hue}, 100%, 70%, ${this.opacity})`;
            }
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    // Initialize particles - fewer on mobile
    function initParticles() {
        particles = [];
        const isMobile = window.innerWidth < 768;
        const particleCount = isMobile
            ? Math.min(40, Math.floor((canvas.width * canvas.height) / 25000))
            : Math.min(100, Math.floor((canvas.width * canvas.height) / 12000));
        for (let i = 0; i < particleCount; i++) {
            particles.push(new Particle());
        }
    }

    // Draw connecting lines between nearby particles
    function drawConnections() {
        const isLight = document.body.classList.contains('light-theme');

        for (let i = 0; i < particles.length; i++) {
            for (let j = i + 1; j < particles.length; j++) {
                const dx = particles[i].x - particles[j].x;
                const dy = particles[i].y - particles[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < 100) {
                    const opacity = (1 - distance / 100) * 0.12;
                    if (isLight) {
                        ctx.strokeStyle = `rgba(59, 130, 246, ${opacity})`;
                    } else {
                        ctx.strokeStyle = `rgba(0, 242, 255, ${opacity})`;
                    }
                    ctx.lineWidth = 0.5;
                    ctx.beginPath();
                    ctx.moveTo(particles[i].x, particles[i].y);
                    ctx.lineTo(particles[j].x, particles[j].y);
                    ctx.stroke();
                }
            }
        }
    }

    // Animation loop
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        particles.forEach(particle => {
            particle.update();
            particle.draw();
        });

        drawConnections();
        animationId = requestAnimationFrame(animate);
    }

    // Track mouse for particle interaction
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });

    // Start animation
    resizeCanvas();
    initParticles();
    animate();

    // Handle resize
    window.addEventListener('resize', () => {
        resizeCanvas();
        initParticles();
    });
}

// =========================================
// 10. CUSTOM CURSOR
// =========================================
const customCursor = document.querySelector('.custom-cursor');
const cursorTrail = document.querySelector('.cursor-trail');

if (customCursor && cursorTrail && window.innerWidth > 768) {
    let cursorX = 0, cursorY = 0;
    let trailX = 0, trailY = 0;

    document.addEventListener('mousemove', (e) => {
        cursorX = e.clientX;
        cursorY = e.clientY;

        customCursor.style.left = cursorX + 'px';
        customCursor.style.top = cursorY + 'px';
    });

    // Smooth trail animation
    function animateTrail() {
        trailX += (cursorX - trailX) * 0.15;
        trailY += (cursorY - trailY) * 0.15;

        cursorTrail.style.left = trailX + 'px';
        cursorTrail.style.top = trailY + 'px';

        requestAnimationFrame(animateTrail);
    }
    animateTrail();

    // Cursor effects on hover
    const hoverElements = document.querySelectorAll('a, button, .hover-trigger, .project-card, .glass-card, .tech-badge');

    hoverElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            customCursor.classList.add('cursor-hover');
            cursorTrail.classList.add('trail-hover');
        });

        el.addEventListener('mouseleave', () => {
            customCursor.classList.remove('cursor-hover');
            cursorTrail.classList.remove('trail-hover');
        });
    });

    // Click effect
    document.addEventListener('mousedown', () => {
        customCursor.classList.add('cursor-click');
    });

    document.addEventListener('mouseup', () => {
        customCursor.classList.remove('cursor-click');
    });
}

// =========================================
// 11. SCROLL TO TOP BUTTON
// =========================================
const scrollTopBtn = document.querySelector('.scroll-top');
if (scrollTopBtn) {
    scrollTopBtn.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// =========================================
// 12. CONTACT FORM SUBMISSION
// =========================================
const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const formStatus = document.getElementById('form-status');

if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        // Custom Validation
        const nameInput = contactForm.querySelector('input[name="name"]');
        const emailInput = contactForm.querySelector('input[name="email"]');
        const messageInput = contactForm.querySelector('textarea[name="message"]');

        let isValid = true;
        let errorMessage = '';

        // Validate inputs
        if (isValid) {
            // Show success logic here (simulated)
            const btn = contactForm.querySelector('button');
            const originalText = btn.innerHTML;
            btn.innerHTML = 'Sending...';
            btn.disabled = true;

            setTimeout(() => {
                btn.innerHTML = 'Message Sent! <i class="fas fa-check"></i>';
                formStatus.innerHTML = '<p class="success-message">Thanks! I will get back to you soon.</p>';
                contactForm.reset();
                setTimeout(() => {
                    btn.innerHTML = originalText;
                    btn.disabled = false;
                    formStatus.innerHTML = '';
                    // Reset Checkbox
                    document.getElementById('human-verify-contact').checked = false;
                    document.getElementById('submit-btn').disabled = true;
                }, 3000);
            }, 1500);

            // NOTE: In a real implementation, you would submit to Formspree here
            // contactForm.submit(); 
        } else {
            formStatus.innerHTML = `<p class="error-message">${errorMessage}</p>`;
            formStatus.className = 'form-status error';
        }
    }); // End of contact form submit listener
}

// =========================================
// 13. MOBILE NAVIGATION TOGGLE
// =========================================
const mobileToggle = document.querySelector('.mobile-toggle');
const mobileNavOverlay = document.querySelector('.mobile-nav-overlay');
const closeMobileNav = document.querySelector('.close-mobile-nav');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-links a');

if (mobileToggle && mobileNavOverlay && closeMobileNav) {
    // Open menu
    mobileToggle.addEventListener('click', () => {
        mobileNavOverlay.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
    });

    // Close menu function
    const closeMenu = () => {
        mobileNavOverlay.classList.remove('active');
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    // Close on close button click
    closeMobileNav.addEventListener('click', closeMenu);

    // Close on overlay click (outside menu)
    mobileNavOverlay.addEventListener('click', (e) => {
        if (e.target === mobileNavOverlay) {
            closeMenu();
        }
    });

    // Close on link click
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });
}

// =========================================
// 14. HUMAN VERIFICATION & RESUME LOGIC
// =========================================

// Contact Form Verification
const contactCheckbox = document.getElementById('human-verify-contact');
const contactBtn = document.getElementById('submit-btn');

if (contactCheckbox && contactBtn) {
    contactCheckbox.addEventListener('change', function () {
        if (this.checked) {
            contactBtn.disabled = false;
        } else {
            contactBtn.disabled = true;
        }
    });
}

// Resume Modal Verification
const resumeCheckbox = document.getElementById('human-verify-resume');
const resumeDownloadBtn = document.getElementById('resume-download-btn');

if (resumeCheckbox && resumeDownloadBtn) {
    resumeCheckbox.addEventListener('change', function () {
        if (this.checked) {
            resumeDownloadBtn.classList.remove('disabled-btn');
            resumeDownloadBtn.style.pointerEvents = 'auto';
            resumeDownloadBtn.style.opacity = '1';
        } else {
            resumeDownloadBtn.classList.add('disabled-btn');
            resumeDownloadBtn.style.pointerEvents = 'none';
            resumeDownloadBtn.style.opacity = '0.5';
        }
    });

    resumeDownloadBtn.addEventListener('click', function () {
        // Close modal after short delay
        setTimeout(() => {
            closeModal('resume-modal');
            // Reset state
            resumeCheckbox.checked = false;
            resumeDownloadBtn.classList.add('disabled-btn');
            resumeDownloadBtn.style.pointerEvents = 'none';
            resumeDownloadBtn.style.opacity = '0.5';
        }, 1000);
    });
}

// =========================================
// 15. STAGGERED ANIMATION FOR TECH BADGES
// =========================================
const techBadges = document.querySelectorAll('.tech-badge');

const techObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            // Add animation class with staggered delay
            techBadges.forEach((badge, index) => {
                setTimeout(() => {
                    badge.classList.add('animate-reveal');
                }, index * 100); // 100ms delay between each item
            });
            // Stop observing once triggered
            techObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1 });

// Observe the container of badges
const skillsSection = document.querySelector('.skills-tech-grid');
if (skillsSection) {
    techObserver.observe(skillsSection);
}

