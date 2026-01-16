// Project Data
const projects = [
    {
        name: "FinTech AI Processor",
        designation: "Next.js • TypeScript • AI",
        quote: "AI-powered system to extract, normalize, and analyze data from invoices and receipts using intelligent concept mapping.",
        src: "fintech.png"
    },
    {
        name: "Tw33t Social App",
        designation: "Next.js • Modern UI",
        quote: "A social-media-style web application featuring routing, reusable components, and modern UI patterns.",
        src: "tweet.png"
    },
    {
        name: "Rising Welfare",
        designation: "MERN Stack",
        quote: "Developed a foundation website with dynamic backend integration using MongoDB and Node.js.",
        src: "rwf.png"
    },
    {
        name: "Coders Era Community",
        designation: "Community Platform",
        quote: "Designed and developed the official website for a tech community. Focused on clean UI, accessibility, and performance.",
        src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80"
    }
];

// Configuration
const AUTOPLAY = false;

document.addEventListener('DOMContentLoaded', () => {
    const imageContainer = document.getElementById('project-images');
    const nameEl = document.getElementById('project-name');
    const roleEl = document.getElementById('project-role');
    const quoteEl = document.getElementById('project-quote');
    const prevBtn = document.getElementById('prev-project');
    const nextBtn = document.getElementById('next-project');

    let activeIndex = 0;
    let rotationAngles = projects.map(() => Math.floor(Math.random() * 21) - 10);

    function render() {
        // Render Images
        imageContainer.innerHTML = '';
        projects.forEach((project, index) => {
            const isActive = index === activeIndex;
            const imgWrapper = document.createElement('div');

            // Tailwind classes for absolute positioning
            imgWrapper.className = `absolute inset-0 origin-bottom transition-all duration-500 ease-in-out`;

            // Calculate Styles based on state
            const opacity = isActive ? 1 : 0.7;
            const scale = isActive ? 1 : 0.95;
            const zIndex = isActive ? 50 : projects.length + 2 - index;
            const rotate = isActive ? 0 : rotationAngles[index];
            const translateY = isActive ? 0 : 0; // Using 0 for stack effect, simplified from React version

            imgWrapper.style.opacity = opacity;
            imgWrapper.style.transform = `scale(${scale}) rotate(${rotate}deg)`;
            imgWrapper.style.zIndex = zIndex;

            // Image Element
            imgWrapper.innerHTML = `
                <img src="${project.src}" alt="${project.name}" 
                class="h-full w-full rounded-3xl object-cover object-center shadow-xl border border-white/10 select-none pointer-events-none">
            `;

            imageContainer.appendChild(imgWrapper);
        });

        // Render Text with Animation
        animateText(nameEl, projects[activeIndex].name);
        animateText(roleEl, projects[activeIndex].designation);

        // Split quote into words for staggered animation
        quoteEl.innerHTML = '';
        const words = projects[activeIndex].quote.split(' ');
        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word + ' ';
            span.className = 'inline-block opacity-0 transform translate-y-2 blur-sm transition-all duration-300';
            span.style.transitionDelay = `${index * 0.02}s`;
            quoteEl.appendChild(span);

            // Trigger animation in next frame
            requestAnimationFrame(() => {
                span.classList.remove('opacity-0', 'translate-y-2', 'blur-sm');
            });
        });
    }

    function animateText(element, text) {
        element.style.opacity = 0;
        element.style.transform = 'translateY(10px)';

        setTimeout(() => {
            element.textContent = text;
            element.style.opacity = 1;
            element.style.transform = 'translateY(0)';
        }, 200);
    }

    function handleNext() {
        activeIndex = (activeIndex + 1) % projects.length;
        render();
    }

    function handlePrev() {
        activeIndex = (activeIndex - 1 + projects.length) % projects.length;
        render();
    }

    // Event Listeners
    if (nextBtn) nextBtn.addEventListener('click', handleNext);
    if (prevBtn) prevBtn.addEventListener('click', handlePrev);

    // Initial Render
    if (imageContainer && nameEl) {
        render();
    }

    // Autoplay
    if (AUTOPLAY) {
        setInterval(handleNext, 5000);
    }
});
