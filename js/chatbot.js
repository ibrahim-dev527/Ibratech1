/* ===================================
   INTELLIGENT CHATBOT SYSTEM
   ChatGPT-style conversational AI
   =================================== */

// ===================================
// YOUR PERSONAL INFORMATION DATABASE
// CUSTOMIZE THIS WITH YOUR DETAILS
// ===================================

const MY_INFO = {
    personal: {
        name: "Ibrahim Mohammed Lotsu",
        age: 20,
        location: "Kotobabi, Accra, Ghana",
        title: "Front-End Developer Developer",
        experience: "2+ years",
        email: "lotsuibrahim2@gmail.com",
        phone: ["+233 544 823 484", "+233 554 196 068"],
        languages: ["English", "Twi", "Hausa", "Dandanchi", "Arabic"],
        timezone: "GMT (Greenwitch Meridian Time)",
        food: ["Waakye with meat and the rest of the family members.", "Banku with Tilapia", "Fried Rice"]
    },
    
    education: {
        degree: "Bachelor of Technology in Accounting and Finance Analytics",
        university: "Accra Technical University",
        graduationYear: 2028,
        gpa: "4.2/5.0",
        certifications: [
            "WASSCE",
            "Front-End Certified Developer",
            "Google Cloud Professional",
            "MongoDB Certified Developer"
        ]
    },
    
    skills: {
        programming: ["JavaScript", "Python", "Java", "TypeScript", "C++"],
        frontend: ["React", "Vue.js", "Angular", "HTML5", "CSS3", "Tailwind"],
        backend: ["Node.js", "Express", "Django", "Flask", "Spring Boot"],
        database: ["MongoDB", "PostgreSQL", "MySQL", "Redis"],
        tools: ["Git", "Docker", "Kubernetes", "AWS", "Jenkins"],
        softSkills: ["Team Leadership", "Problem Solving", "Communication", "Agile/Scrum"]
    },
    
    experience: [
        {
            company: "Tech Innovations Inc.",
            position: "Senior Full Stack Developer",
            duration: "2020 - Present",
            responsibilities: [
                "Led team of 5 developers",
                "Architected microservices infrastructure",
                "Reduced load time by 40%"
            ]
        },
        {
            company: "StartUp Solutions",
            position: "Junior Developer",
            duration: "2018 - 2020",
            responsibilities: [
                "Built responsive web applications",
                "Collaborated with design team",
                "Implemented RESTful APIs"
            ]
        }
    ],
    
    services: {
        offered: [
            "Custom Web Development",
            "Mobile App Development",
            "API Development & Integration",
            "Database Design & Optimization",
            "Technical Consulting",
            "Code Review & Refactoring"
        ],
        availability: "Available for freelance and contract work",
        responseTime: "Usually within 24 hours",
        projectDuration: "2 weeks to 6 months (depends on scope)"
    },
    
    projects: [
        {
            name: "E-commerce Platform",
            tech: ["React", "Node.js", "MongoDB"],
            description: "Built scalable online shopping platform handling 10K+ daily users"
        },
        {
            name: "Real-time Chat Application",
            tech: ["Socket.io", "Express", "Redis"],
            description: "WebSocket-based messaging system with end-to-end encryption"
        },
        {
            name: "AI-Powered Analytics Dashboard",
            tech: ["Python", "TensorFlow", "React"],
            description: "Machine learning dashboard for business intelligence"
        }
    ],
    
    interests: {
        tech: ["AI/ML", "Web3/Blockchain", "Cloud Computing", "DevOps", "Video Editing"],
        hobbies: ["Open Source Contribution", "Tech Blogging", "Photography", "Hiking"],
        learning: "Currently learning Software Engineering"
    },
    
    website: {
        pages: {
            home: "Landing page with introduction and featured work",
            about: "Detailed background, education, and experience",
            portfolio: "Showcase of completed projects with case studies",
            skills: "Technical skills and proficiency levels",
            services: "Services offered and pricing information",
            blog: "Articles about web development and tech trends",
            contact: "Contact form and availability information"
        },
        features: [
            "Responsive design for all devices",
            "Interactive project galleries",
            "Downloadable resume",
            "Live chat support (this bot!)",
            "Newsletter subscription"
        ]
    }
};

// ===================================
// CHATBOT KNOWLEDGE BASE & AI LOGIC
// ===================================

class IntelligentChatbot {
    constructor(userInfo) {
        this.userInfo = userInfo;
        this.conversationHistory = [];
        this.context = null;
    }
    
    // Main response generator
    generateResponse(userMessage) {
        const message = userMessage.toLowerCase().trim();
        
        // Store conversation history
        this.conversationHistory.push({
            role: 'user',
            content: userMessage
        });
        
        let response = "";
        
        // Greetings
        if (this.matchesPatterns(message, ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon'])) {
            response = this.getGreeting();
        }
        
        // Name queries
        else if (this.matchesPatterns(message, ['your name', 'who are you', 'introduce yourself'])) {
            response = `I'm ${this.userInfo.personal.name}, a ${this.userInfo.personal.title} with ${this.userInfo.personal.experience} of experience. I specialize in creating innovative web solutions. How can I help you today?`;
        }
        
        // Experience queries
        else if (this.matchesPatterns(message, ['experience', 'work history', 'career', 'worked where'])) {
            response = this.getExperienceInfo();
        }
        
        // Skills queries
        else if (this.matchesPatterns(message, ['skills', 'technologies', 'what do you know', 'programming languages', 'tech stack'])) {
            response = this.getSkillsInfo();
        }
        
        // Education queries
        else if (this.matchesPatterns(message, ['education', 'degree', 'university', 'studied', 'school'])) {
            response = this.getEducationInfo();
        }
        
        // Services queries
        else if (this.matchesPatterns(message, ['services', 'what do you offer', 'hire', 'work with you', 'pricing'])) {
            response = this.getServicesInfo();
        }
        
        // Projects queries
        else if (this.matchesPatterns(message, ['projects', 'portfolio', 'work samples', 'what have you built'])) {
            response = this.getProjectsInfo();
        }
        
        // Contact queries
        else if (this.matchesPatterns(message, ['contact', 'email', 'phone', 'reach you', 'get in touch'])) {
            response = this.getContactInfo();
        }
        
        // Location queries
        else if (this.matchesPatterns(message, ['where are you', 'location', 'based', 'city'])) {
            response = `I'm based in ${this.userInfo.personal.location}. I'm available for both local and remote projects.`;
        }
        
        // Availability queries
        else if (this.matchesPatterns(message, ['available', 'free', 'hiring', 'open to work'])) {
            response = `Yes! ${this.userInfo.services.availability}. I typically respond ${this.userInfo.services.responseTime.toLowerCase()}. Would you like to discuss a project?`;
        }
        
        // Website navigation
        else if (this.matchesPatterns(message, ['website', 'pages', 'navigation', 'where can i find'])) {
            response = this.getWebsiteInfo();
        }
        
        // Thank you
        else if (this.matchesPatterns(message, ['thank', 'thanks', 'appreciate'])) {
            response = "You're very welcome! If you have any other questions about my work, skills, or how we can collaborate, feel free to ask. I'm here to help! 😊";
        }
        
        // Goodbye
        else if (this.matchesPatterns(message, ['bye', 'goodbye', 'see you', 'talk later'])) {
            response = "Thanks for chatting with me! Feel free to reach out anytime. Have a great day! 👋";
        }
        
        // Help queries
        else if (this.matchesPatterns(message, ['help', 'what can you do', 'commands'])) {
            response = this.getHelpInfo();
        }
        
        // Default response
        else {
            response = this.getSmartDefault(message);
        }
        
        // Store bot response
        this.conversationHistory.push({
            role: 'assistant',
            content: response
        });
        
        return response;
    }
    
    // Pattern matching helper
    matchesPatterns(message, patterns) {
        return patterns.some(pattern => message.includes(pattern));
    }
    
    // Get greeting based on time
    getGreeting() {
        const hour = new Date().getHours();
        let timeGreeting = "";
        
        if (hour < 12) timeGreeting = "Good morning";
        else if (hour < 18) timeGreeting = "Good afternoon";
        else timeGreeting = "Good evening";
        
        const greetings = [
            `${timeGreeting}! I'm ${this.userInfo.personal.name}. How can I assist you today?`,
            `Hello! Welcome to my portfolio. I'm ${this.userInfo.personal.name}, a ${this.userInfo.personal.title}. What would you like to know?`,
            `Hi there! Thanks for visiting. I'm ${this.userInfo.personal.name}. Feel free to ask me anything about my work or experience!`
        ];
        
        return greetings[Math.floor(Math.random() * greetings.length)];
    }
    
    // Get experience information
    getExperienceInfo() {
        const exp = this.userInfo.experience[0]; // Most recent
        return `I have ${this.userInfo.personal.experience} in the field. Currently, I'm a ${exp.position} at ${exp.company}, where I've been since ${exp.duration.split(' - ')[0]}. Some of my key achievements include: ${exp.responsibilities.join(', ')}. Would you like to know more about my technical skills or see my project portfolio?`;
    }
    
    // Get skills information
    getSkillsInfo() {
        const skills = this.userInfo.skills;
        return `I have expertise in various technologies:\n\n**Programming Languages:** ${skills.programming.join(', ')}\n\n**Frontend:** ${skills.frontend.join(', ')}\n\n**Backend:** ${skills.backend.join(', ')}\n\n**Databases:** ${skills.database.join(', ')}\n\nI'm also proficient with ${skills.tools.join(', ')}. Is there a specific technology you'd like to discuss?`;
    }
    
    // Get education information
    getEducationInfo() {
        const edu = this.userInfo.education;
        return `I hold a ${edu.degree} from ${edu.university}, graduated in ${edu.graduationYear} with a ${edu.gpa} GPA. I'm also certified in: ${edu.certifications.join(', ')}. I believe in continuous learning and regularly update my skills!`;
    }
    
    // Get services information
    getServicesInfo() {
        const services = this.userInfo.services;
        return `I offer the following services:\n\n${services.offered.map((s, i) => `${i + 1}. ${s}`).join('\n')}\n\n${services.availability}. Project timelines typically range from ${services.projectDuration}. Would you like to discuss your project requirements?`;
    }
    
    // Get projects information
    getProjectsInfo() {
        const projects = this.userInfo.projects;
        let response = "Here are some of my notable projects:\n\n";
        
        projects.forEach((project, index) => {
            response += `**${index + 1}. ${project.name}**\n`;
            response += `Technologies: ${project.tech.join(', ')}\n`;
            response += `${project.description}\n\n`;
        });
        
        response += "You can see more projects in my Portfolio page. Would you like details about any specific project?";
        return response;
    }
    
    // Get contact information
    getContactInfo() {
        const contact = this.userInfo.personal;
        return `You can reach me through:\n\n📧 Email: ${contact.email}\n📱 Phone: ${contact.phone}\n📍 Location: ${contact.location}\n\nI'm available in ${contact.timezone} and usually respond ${this.userInfo.services.responseTime.toLowerCase()}. Feel free to use the contact form on this website as well!`;
    }
    
    // Get website information
    getWebsiteInfo() {
        const pages = this.userInfo.website.pages;
        let response = "Here's what you can find on my website:\n\n";
        
        Object.keys(pages).forEach(page => {
            response += `**${page.charAt(0).toUpperCase() + page.slice(1)}:** ${pages[page]}\n`;
        });
        
        response += "\nFeel free to explore any section! What would you like to know more about?";
        return response;
    }
    
    // Get help information
    getHelpInfo() {
        return `I can help you with:\n\n• My background and experience\n• Technical skills and expertise\n• Services I offer\n• Past projects and portfolio\n• Contact information\n• Website navigation\n• Availability for projects\n\nJust ask me anything! For example: "What are your skills?" or "Tell me about your experience" or "How can I hire you?"`;
    }
    
    // Smart default response
    getSmartDefault(message) {
        // Try to extract keywords and give relevant response
        const keywords = {
            'react': 'I have extensive experience with React! It\'s one of my primary frontend frameworks. Would you like to see some React projects I\'ve built?',
            'python': 'Python is one of my core languages! I use it for backend development, data analysis, and automation. What would you like to know about my Python work?',
            'price': 'Project pricing varies based on scope and requirements. Typically, projects range from $2,000 to $20,000+. I\'d be happy to provide a detailed quote after discussing your specific needs. Shall we chat about your project?',
            'resume': 'You can download my full resume from the About page, or I can share my experience highlights right here. Would you like a summary of my background?',
            'remote': 'Yes, I work remotely with clients worldwide! I\'m experienced with remote collaboration tools and agile methodologies. Are you looking for remote development services?'
        };
        
        for (const [keyword, response] of Object.entries(keywords)) {
            if (message.includes(keyword)) {
                return response;
            }
        }
        
        // If no match, provide helpful default
        return `That's an interesting question! While I might not have specific information about that, I can tell you about:\n\n• My professional experience and skills\n• Services I offer\n• My portfolio projects\n• How to get in touch\n\nWhat would you like to know more about? Or feel free to rephrase your question!`;
    }
}

// ===================================
// INITIALIZE CHATBOT ON PAGE LOAD
// ===================================

document.addEventListener('DOMContentLoaded', function() {
    
    // Create chatbot instance
    const chatbot = new IntelligentChatbot(MY_INFO);
    
    // Create chat interface
    createChatInterface();
    
    // Initialize chatbot functionality
    initializeChatbot(chatbot);
    
    // Initialize search functionality
    initializeSearch();
});

// ===================================
// CREATE CHAT INTERFACE
// ===================================

function createChatInterface() {
    const chatHTML = `
        <div id="chatWindow" class="chat-window">
            <div class="chat-header">
                <div class="chat-header-info">
                    <div class="chat-avatar">💬</div>
                    <div>
                        <h4>AI Assistant</h4>
                        <span class="status-indicator">● Online</span>
                    </div>
                </div>
                <button id="closeChat" class="close-chat">✕</button>
            </div>
            
            <div id="chatMessages" class="chat-messages">
                <div class="bot-message">
                    <div class="message-avatar">🤖</div>
                    <div class="message-content">
                        <p>Hi! I'm an AI assistant for ${MY_INFO.personal.name}'s portfolio. I can answer questions about experience, skills, projects, services, and more. How can I help you today?</p>
                    </div>
                </div>
            </div>
            
            <div class="chat-input-container">
                <input type="text" id="chatInput" placeholder="Ask me anything..." />
                <button id="sendMessage" class="send-button">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="22" y1="2" x2="11" y2="13"></line>
                        <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                </button>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', chatHTML);
}

// ===================================
// INITIALIZE CHATBOT FUNCTIONALITY
// ===================================

function initializeChatbot(chatbot) {
    const chatFloat = document.querySelector('.chatbot-float');
    const chatWindow = document.getElementById('chatWindow');
    const closeChat = document.getElementById('closeChat');
    const sendMessage = document.getElementById('sendMessage');
    const chatInput = document.getElementById('chatInput');
    const chatMessages = document.getElementById('chatMessages');
    
    // Open chat
    chatFloat.addEventListener('click', function() {
        chatWindow.classList.add('active');
        chatFloat.style.display = 'flex';
        chatInput.focus();
    });
    
    // Close chat
    closeChat.addEventListener('click', function() {
        chatWindow.classList.remove('active');
        chatFloat.style.display = 'flex';
    });
    
    // Send message on button click
    sendMessage.addEventListener('click', function() {
        sendUserMessage(chatbot, chatInput, chatMessages);
    });
    
    // Send message on Enter key
    chatInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            sendUserMessage(chatbot, chatInput, chatMessages);
        }
    });
}

// ===================================
// SEND USER MESSAGE
// ===================================

function sendUserMessage(chatbot, inputElement, messagesContainer) {
    const message = inputElement.value.trim();
    
    if (message === '') return;
    
    // Display user message
    appendMessage('user', message, messagesContainer);
    
    // Clear input
    inputElement.value = '';
    
    // Show typing indicator
    showTypingIndicator(messagesContainer);
    
    // Simulate thinking time (like ChatGPT)
    setTimeout(() => {
        removeTypingIndicator(messagesContainer);
        
        // Get bot response
        const response = chatbot.generateResponse(message);
        
        // Display bot response
        appendMessage('bot', response, messagesContainer);
    }, 1000 + Math.random() * 1000); // Random delay 1-2 seconds
}

// ===================================
// APPEND MESSAGE TO CHAT
// ===================================

function appendMessage(sender, message, container) {
    const messageDiv = document.createElement('div');
    messageDiv.className = sender === 'user' ? 'user-message' : 'bot-message';
    
    const avatar = sender === 'user' ? '👤' : '🤖';
    
    // Format message (convert **text** to bold, etc.)
    const formattedMessage = formatMessage(message);
    
    messageDiv.innerHTML = `
        <div class="message-avatar">${avatar}</div>
        <div class="message-content">
            ${formattedMessage}
        </div>
    `;
    
    container.appendChild(messageDiv);
    
    // Scroll to bottom
    container.scrollTop = container.scrollHeight;
}

// ===================================
// FORMAT MESSAGE (Markdown-like)
// ===================================

function formatMessage(message) {
    // Convert **text** to bold
    message = message.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
    
    // Convert newlines to <br>
    message = message.replace(/\n/g, '<br>');
    
    // Wrap in paragraph
    return `<p>${message}</p>`;
}

// ===================================
// TYPING INDICATOR
// ===================================

function showTypingIndicator(container) {
    const typingDiv = document.createElement('div');
    typingDiv.className = 'bot-message typing-indicator';
    typingDiv.id = 'typingIndicator';
    typingDiv.innerHTML = `
        <div class="message-avatar">🤖</div>
        <div class="message-content">
            <div class="typing-dots">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
    `;
    
    container.appendChild(typingDiv);
    container.scrollTop = container.scrollHeight;
}

function removeTypingIndicator(container) {
    const indicator = document.getElementById('typingIndicator');
    if (indicator) {
        indicator.remove();
    }
}

// ===================================
// SEARCH FUNCTIONALITY
// ===================================

function initializeSearch() {
    const searchBtn = document.getElementById('searchBtn');
    const searchInput = document.getElementById('searchInput');
    
    if (!searchBtn || !searchInput) return;
    
    // Remove old event listeners
    searchBtn.replaceWith(searchBtn.cloneNode(true));
    const newSearchBtn = document.getElementById('searchBtn');
    
    newSearchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(event) {
        if (event.key === 'Enter') {
            performSearch();
        }
    });
}

function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const query = searchInput.value.trim().toLowerCase();
    
    if (query === '') {
        alert('Please enter a search term');
        return;
    }
    
    // Search through MY_INFO
    const results = searchDatabase(query);
    
    // Display results
    displaySearchResults(query, results);
    
    // Clear input
    searchInput.value = '';
}

function searchDatabase(query) {
    const results = [];
    
    // Search personal info
    Object.entries(MY_INFO.personal).forEach(([key, value]) => {
        if (String(value).toLowerCase().includes(query)) {
            results.push({
                category: 'Personal Information',
                field: key,
                content: value
            });
        }
    });
    
    // Search skills
    Object.entries(MY_INFO.skills).forEach(([category, skills]) => {
        if (Array.isArray(skills)) {
            skills.forEach(skill => {
                if (skill.toLowerCase().includes(query)) {
                    results.push({
                        category: 'Skills',
                        field: category,
                        content: skill
                    });
                }
            });
        }
    });
    
    // Search projects
    MY_INFO.projects.forEach(project => {
        if (project.name.toLowerCase().includes(query) ||
            project.description.toLowerCase().includes(query)) {
            results.push({
                category: 'Projects',
                field: project.name,
                content: project.description
            });
        }
    });
    
    // Search services
    MY_INFO.services.offered.forEach(service => {
        if (service.toLowerCase().includes(query)) {
            results.push({
                category: 'Services',
                field: 'Service',
                content: service
            });
        }
    });
    
    return results;
}

function displaySearchResults(query, results) {
    let message = `Search results for "${query}":\n\n`;
    
    if (results.length === 0) {
        message = `No results found for "${query}". Try searching for:\n• Skills (React, Python, etc.)\n• Services\n• Projects\n• Experience`;
    } else {
        results.forEach((result, index) => {
            message += `${index + 1}. **${result.category}** - ${result.field}:\n   ${result.content}\n\n`;
        });
    }
    
    // Display in chatbot
    const chatMessages = document.getElementById('chatMessages');
    if (chatMessages) {
        appendMessage('bot', message, chatMessages);
        
        // Open chat window
        const chatWindow = document.getElementById('chatWindow');
        const chatFloat = document.querySelector('.chatbot-float');
        chatWindow.classList.add('active');
        chatFloat.style.display = 'none';
    } else {
        alert(message.replace(/\*\*/g, '').replace(/\n/g, '\n'));
    }
}
   