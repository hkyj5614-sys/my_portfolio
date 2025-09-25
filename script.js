// Theme Toggle Functionality
document.addEventListener('DOMContentLoaded', function() {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;
    
    // Check for saved theme preference or default to light mode
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    // Theme toggle event listener
    themeToggle.addEventListener('click', function() {
        const currentTheme = body.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        body.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
        
        // Add a subtle animation effect
        themeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });
    
    function updateThemeIcon(theme) {
        const icon = themeToggle.querySelector('i');
        if (theme === 'dark') {
            icon.className = 'fas fa-sun';
        } else {
            icon.className = 'fas fa-moon';
        }
    }
});

// Smooth scrolling for anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// Intersection Observer for scroll animations (simplified)
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    // Observe all sections for scroll animations
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.4s ease, transform 0.4s ease';
        observer.observe(section);
    });
});

// Add hover effects to interactive elements
document.addEventListener('DOMContentLoaded', function() {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.theme-btn, .skill-tag');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});

// Add CSS for ripple effect
const style = document.createElement('style');
style.textContent = `
    .ripple {
        position: absolute;
        border-radius: 50%;
        background: rgba(255, 255, 255, 0.3);
        transform: scale(0);
        animation: ripple-animation 0.6s linear;
        pointer-events: none;
    }
    
    @keyframes ripple-animation {
        to {
            transform: scale(4);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Add loading animation
document.addEventListener('DOMContentLoaded', function() {
    // Add a subtle loading animation
    const body = document.body;
    body.style.opacity = '0';
    body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        body.style.opacity = '1';
    }, 100);
});

// Add typing animation to name
document.addEventListener('DOMContentLoaded', function() {
    const nameElement = document.querySelector('.name');
    if (!nameElement) return;
    
    const originalText = nameElement.textContent;
    nameElement.textContent = '';
    nameElement.style.opacity = '1';
    
    let i = 0;
    const typeWriter = () => {
        if (i < originalText.length) {
            nameElement.textContent += originalText.charAt(i);
            i++;
            requestAnimationFrame(() => {
                setTimeout(typeWriter, 80);
            });
        }
    };
    
    // Start typing animation after a short delay
    setTimeout(typeWriter, 300);
});

// Add progress bar animation for gallery items
document.addEventListener('DOMContentLoaded', function() {
    const progressBars = document.querySelectorAll('.progress');
    
    const animateProgressBars = () => {
        progressBars.forEach((bar, index) => {
            const width = bar.style.width;
            bar.style.width = '0%';
            bar.style.transition = 'width 1s ease-in-out';
            setTimeout(() => {
                bar.style.width = width;
            }, index * 100); // 순차적으로 애니메이션
        });
    };
    
    // Animate progress bars when they come into view
    const galleryObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateProgressBars();
                galleryObserver.unobserve(entry.target);
            }
        });
    });
    
    const gallerySection = document.querySelector('.gallery');
    if (gallerySection) {
        galleryObserver.observe(gallerySection);
    }
});

// Add skill tag hover effects
document.addEventListener('DOMContentLoaded', function() {
    const skillTags = document.querySelectorAll('.skill-tag');
    
    skillTags.forEach(tag => {
        tag.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.1) rotate(2deg)';
        });
        
        tag.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });
});

// 스크롤 하이라이트 기능 제거 (성능 최적화)

// 하이라이트 CSS 제거 (성능 최적화)
