/* ===================================
   COMPLETE PORTFOLIO WEBSITE JAVASCRIPT
   All Interactive Functionality
   =================================== */

// Wait for DOM to fully load
document.addEventListener('DOMContentLoaded', function() {
    
    // ===================================
    // HAMBURGER MENU FUNCTIONALITY
    // ===================================
    const hamburger = document.getElementById('hamburger');
    const mainNav = document.getElementById('mainNav');
    
    if (hamburger && mainNav) {
        hamburger.addEventListener('click', function() {
            // Toggle hamburger animation
            this.classList.toggle('active');
            
            // Toggle navigation menu
            mainNav.classList.toggle('active');
            
            // Prevent body scroll when menu is open
            if (mainNav.classList.contains('active')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
        
        // Close menu when clicking on a link
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                hamburger.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!mainNav.contains(event.target) && !hamburger.contains(event.target)) {
                hamburger.classList.remove('active');
                mainNav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // ===================================
    // SMOOTH SCROLL FOR ANCHOR LINKS
    // ===================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // ===================================
    // SEARCH FUNCTIONALITY
    // ===================================
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    function performSearch() {
        const query = searchInput.value.trim();
        
        if (query === '') {
            alert('Please enter a search term');
            return;
        }
        
        // In a real application, this would search your content
        alert(`Searching for: "${query}"\n\nThis would search through:\n• Blog posts\n• Portfolio projects\n• Services\n• Skills`);
        
        // Clear input
        searchInput.value = '';
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(event) {
            if (event.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    // ===================================
    // SCROLL ANIMATIONS
    // Fade in elements as they appear
    // ===================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe all fade-in elements
    const fadeElements = document.querySelectorAll('.fade-in, .box, .tech-card, .value-card');
    fadeElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(element);
    });
    
    // ===================================
    // ACTIVE NAV LINK HIGHLIGHTING
    // ===================================
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.main-nav a');
    
    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
    
    // ===================================
    // TECH SYMBOL ROTATION
    // Cycles through different code symbols
    // ===================================
    const codeSymbol = document.querySelector('.code-symbol');
    if (codeSymbol) {
        const symbols = ['</>', '{ }', '< >', '[ ]', '( )', '</>'];
        let currentIndex = 0;
        
        setInterval(function() {
            currentIndex = (currentIndex + 1) % symbols.length;
            codeSymbol.textContent = symbols[currentIndex];
        }, 3000);
    }
    
    // ===================================
    // CHATBOT FLOAT BUTTON
    // ===================================
    const chatbotFloat = document.getElementById('chatbotFloat');
    if (chatbotFloat) {
        chatbotFloat.addEventListener('click', function() {
            // You can integrate with the chatbot system here
            alert('Chatbot feature!\n\nThis would open the AI chat interface.\n\nIntegrate with chatbot-system.js for full functionality.');
        });
    }
    
    // ===================================
    // PORTFOLIO PROJECT NAVIGATION
    // For Portfolio Page
    // ===================================
    const nextProjectBtn = document.getElementById('nextProject');
    const prevProjectBtn = document.getElementById('prevProject');
    const projectCards = document.querySelectorAll('.project-card');
    let currentProjectIndex = 0;
    
    function showProject(index) {
        projectCards.forEach((card, i) => {
            if (i === index) {
                card.style.display = 'block';
                card.classList.add('fade-in');
            } else {
                card.style.display = 'none';
            }
        });
    }
    
    if (nextProjectBtn) {
        nextProjectBtn.addEventListener('click', function() {
            currentProjectIndex = (currentProjectIndex + 1) % projectCards.length;
            showProject(currentProjectIndex);
        });
    }
    
    if (prevProjectBtn) {
        prevProjectBtn.addEventListener('click', function() {
            currentProjectIndex = (currentProjectIndex - 1 + projectCards.length) % projectCards.length;
            showProject(currentProjectIndex);
        });
    }
    
    // Initialize first project
    if (projectCards.length > 0) {
        showProject(0);
    }
    
    // ===================================
    // BLOG "READ MORE" FUNCTIONALITY
    // Expand/collapse blog posts
    // ===================================
    const readMoreBtns = document.querySelectorAll('.read-more-btn');
    
    readMoreBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const blogPost = this.closest('.blog-post');
            const fullContent = blogPost.querySelector('.full-content');
            const shortContent = blogPost.querySelector('.short-content');
            
            if (fullContent.style.display === 'block') {
                fullContent.style.display = 'none';
                shortContent.style.display = 'block';
                this.textContent = 'Read More';
            } else {
                fullContent.style.display = 'block';
                shortContent.style.display = 'none';
                this.textContent = 'Read Less';
                
                // Smooth scroll to blog post
                blogPost.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
    
    // ===================================
    // IMAGE GALLERY SWIPER
    // For Blog Page
    // ===================================
    const galleries = document.querySelectorAll('.image-gallery');
    
    galleries.forEach(gallery => {
        let startX = 0;
        let scrollLeft = 0;
        let isDown = false;
        
        gallery.addEventListener('mousedown', (e) => {
            isDown = true;
            gallery.style.cursor = 'grabbing';
            startX = e.pageX - gallery.offsetLeft;
            scrollLeft = gallery.scrollLeft;
        });
        
        gallery.addEventListener('mouseleave', () => {
            isDown = false;
            gallery.style.cursor = 'grab';
        });
        
        gallery.addEventListener('mouseup', () => {
            isDown = false;
            gallery.style.cursor = 'grab';
        });
        
        gallery.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - gallery.offsetLeft;
            const walk = (x - startX) * 2;
            gallery.scrollLeft = scrollLeft - walk;
        });
        
        // Touch support for mobile
        gallery.addEventListener('touchstart', (e) => {
            startX = e.touches[0].pageX - gallery.offsetLeft;
            scrollLeft = gallery.scrollLeft;
        });
        
        gallery.addEventListener('touchmove', (e) => {
            const x = e.touches[0].pageX - gallery.offsetLeft;
            const walk = (x - startX) * 2;
            gallery.scrollLeft = scrollLeft - walk;
        });
    });
    
    // ===================================
    // CONTACT FORM VALIDATION
    // ===================================
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value.trim();
            const message = document.getElementById('message').value.trim();
            
            // Validation
            if (!name || !email || !subject || !message) {
                alert('Please fill in all fields');
                return;
            }
            
            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('Please enter a valid email address');
                return;
            }
            
            // Success (in real app, would send to backend)
            alert(`Thank you, ${name}!\n\nYour message has been sent successfully.\n\nSubject: ${subject}\n\nI'll get back to you within 24 hours.`);
            contactForm.reset();
        });
    }
    
    // ===================================
    // WHATSAPP CONTACT BUTTON
    // For Services Page
    // ===================================
    const whatsappBtn = document.getElementById('whatsappContact');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function() {
            // Replace with your actual WhatsApp number
            const phoneNumber = '1234567890'; // Format: country code + number (no spaces or +)
            const message = encodeURIComponent('Hi! I\'m interested in your services.');
            const whatsappURL = `https://wa.me/${phoneNumber}?text=${message}`;
            window.open(whatsappURL, '_blank');
        });
    }
    
    // ===================================
    // SKILLS PROGRESS BARS ANIMATION
    // Animate skill bars when visible
    // ===================================
    const skillBars = document.querySelectorAll('.skill-progress');
    
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const bar = entry.target;
                const percentage = bar.getAttribute('data-percentage');
                bar.style.width = percentage + '%';
            }
        });
    }, { threshold: 0.5 });
    
    skillBars.forEach(bar => {
        bar.style.width = '0%';
        bar.style.transition = 'width 1.5s ease-out';
        skillObserver.observe(bar);
    });
    
    // ===================================
    // SCROLL TO TOP BUTTON
    // ===================================
    const scrollTopBtn = document.createElement('button');
    scrollTopBtn.innerHTML = '↑';
    scrollTopBtn.className = 'scroll-top-btn';
    scrollTopBtn.style.cssText = `
        position: fixed;
        bottom: 100px;
        right: 30px;
        width: 50px;
        height: 50px;
        background: linear-gradient(135deg, var(--primary), var(--secondary));
        color: white;
        border: none;
        border-radius: 50%;
        font-size: 24px;
        cursor: pointer;
        display: none;
        align-items: center;
        justify-content: center;
        box-shadow: 0 5px 20px rgba(102, 126, 234, 0.4);
        transition: all 0.3s ease;
        z-index: 999;
    `;
    
    document.body.appendChild(scrollTopBtn);
    
    // Show/hide scroll to top button
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            scrollTopBtn.style.display = 'flex';
        } else {
            scrollTopBtn.style.display = 'none';
        }
    });
    
    scrollTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    scrollTopBtn.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1)';
    });
    
    scrollTopBtn.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1)';
    });
    
    // ===================================
    // DYNAMIC COPYRIGHT YEAR
    // ===================================
    const footerYear = document.querySelector('.footer-bottom p');
    if (footerYear) {
        const currentYear = new Date().getFullYear();
        footerYear.textContent = `© ${currentYear} Alex Thompson. All Rights Reserved.`;
    }
    
    // ===================================
    // PAGE LOAD ANIMATION
    // ===================================
    window.addEventListener('load', function() {
        document.body.classList.add('loaded');
        
        // Animate elements with stagger effect
        const animatedElements = document.querySelectorAll('.fade-in');
        animatedElements.forEach((element, index) => {
            setTimeout(() => {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }, index * 100);
        });
    });
    
    // ===================================
    // TESTIMONIAL SLIDER (if exists)
    // ===================================
    const testimonials = document.querySelectorAll('.testimonial');
    let currentTestimonial = 0;
    
    function showTestimonial(index) {
        testimonials.forEach((testimonial, i) => {
            if (i === index) {
                testimonial.style.display = 'block';
                testimonial.classList.add('fade-in');
            } else {
                testimonial.style.display = 'none';
            }
        });
    }
    
    if (testimonials.length > 0) {
        showTestimonial(0);
        
        setInterval(() => {
            currentTestimonial = (currentTestimonial + 1) % testimonials.length;
            showTestimonial(currentTestimonial);
        }, 5000);
    }
    
    // ===================================
    // CONSOLE MESSAGE (Easter Egg)
    // ===================================
    console.log('%c👋 Hello, curious developer!', 'font-size: 20px; color: #667eea; font-weight: bold;');
    console.log('%c🚀 Welcome to my portfolio. Like what you see?', 'font-size: 14px; color: #764ba2;');
    console.log('%c📧 Let\'s connect: alex.thompson@portfolio.com', 'font-size: 14px; color: #4a5568;');
    
}); // End of DOMContentLoaded

// ===================================
// UTILITY FUNCTIONS
// ===================================

// Debounce function for performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Throttle function for scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        const args = arguments;
        const context = this;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Get contrast color for accessibility
function getContrastColor(hexcolor) {
    const r = parseInt(hexcolor.substr(1,2),16);
    const g = parseInt(hexcolor.substr(3,2),16);
    const b = parseInt(hexcolor.substr(5,2),16);
    const yiq = ((r*299)+(g*587)+(b*114))/1000;
    return (yiq >= 128) ? 'black' : 'white';
}

// Format date (useful for blog)
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}