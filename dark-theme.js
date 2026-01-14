// Custom Cursor Logic
const cursorDot = document.createElement('div');
const cursorOutline = document.createElement('div');

cursorDot.className = 'cursor-dot';
cursorOutline.className = 'cursor-outline';

document.body.appendChild(cursorDot);
document.body.appendChild(cursorOutline);

window.addEventListener('mousemove', function (e) {
    const posX = e.clientX;
    const posY = e.clientY;

    // Dot follows instantly
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;

    // Outline follows with slight delay (handled by CSS transition, but we set position here)
    // For smoother "trailing" effect via JS animation:
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 500, fill: "forwards" });
});

// Cursor Interaction with clickable elements
const clickables = document.querySelectorAll('a, button, .cursor-pointer, input, textarea');

clickables.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '60px';
        cursorOutline.style.height = '60px';
        cursorOutline.style.backgroundColor = 'rgba(139, 92, 246, 0.2)'; // Purple tint
        cursorOutline.style.borderColor = 'var(--neon-purple)';
    });

    el.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.backgroundColor = 'rgba(0, 234, 255, 0.1)';
        cursorOutline.style.borderColor = 'var(--neon-blue)';
    });
});

// Particle System (Starfield)
const canvas = document.getElementById('particle-canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particlesArray;

class Particle {
    constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2;
        this.speedX = (Math.random() * 0.5) - 0.25;
        this.speedY = (Math.random() * 0.5) - 0.25;
        // Neon colors
        this.color = Math.random() > 0.5 ? 'rgba(0, 234, 255, ' : 'rgba(139, 92, 246, ';
        this.opacity = Math.random() * 0.5 + 0.1;
    }

    update() {
        this.x += this.speedX;
        this.y += this.speedY;

        // Wrap around screen
        if (this.x > canvas.width) this.x = 0;
        if (this.x < 0) this.x = canvas.width;
        if (this.y > canvas.height) this.y = 0;
        if (this.y < 0) this.y = canvas.height;
    }

    draw() {
        ctx.fillStyle = this.color + this.opacity + ')';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();

        // Glow effect
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color + '1)';
    }
}

function initParticles() {
    particlesArray = [];
    const numberOfParticles = (canvas.width * canvas.height) / 15000; // Density
    for (let i = 0; i < numberOfParticles; i++) {
        particlesArray.push(new Particle());
    }
}

function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < particlesArray.length; i++) {
        particlesArray[i].update();
        particlesArray[i].draw();
    }
    requestAnimationFrame(animateParticles);
}

// Handle resize
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    initParticles();
});

initParticles();
animateParticles();
