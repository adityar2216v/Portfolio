// Certificate Data
const certificates = [
    {
        id: 1,
        title: "AI For All Badge & Certificate",
        issuer: "Intel",
        image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80", // AI Abstract
        link: "https://www.linkedin.com/posts/aditya-raj-srivastava-401b75328_aiforall-artificialintelligence-digitalindia-activity-7372571701395488768-Hkwk?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLBHwEBn1cB8YHh2feu69d2tR3sM9P3Al4"
    },
    {
        id: 2,
        title: "Data Structures using Python",
        issuer: "Infosys Springboard",
        image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80", // Python Code
        link: "https://www.linkedin.com/posts/aditya-raj-srivastava-401b75328_certificate-activity-7362169028594835457-Vcpu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLBHwEBn1cB8YHh2feu69d2tR3sM9P3Al4"
    },
    {
        id: 3,
        title: "Technology Job Simulation",
        issuer: "Deloitte",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80", // Business/Consulting
        link: "https://www.linkedin.com/posts/aditya-raj-srivastava-401b75328_forage-certificate-activity-7337613444277309440-9Ry-?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLBHwEBn1cB8YHh2feu69d2tR3sM9P3Al4"
    },
    {
        id: 4,
        title: "Microsoft Office 2016",
        issuer: "Infosys Springboard",
        image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80", // Spreadsheet/Office
        link: "https://www.linkedin.com/posts/aditya-raj-srivastava-401b75328_microsoftexcel-infosysspringboard-lifelonglearning-activity-7320749134343299072-LYVu?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLBHwEBn1cB8YHh2feu69d2tR3sM9P3Al4"
    },
    {
        id: 5,
        title: "Programming in C",
        issuer: "Infosys Springboard",
        image: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80", // Coding
        link: "https://www.linkedin.com/posts/aditya-raj-srivastava-401b75328_programming-c-certification-activity-7311475985277706241-fDw4?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLBHwEBn1cB8YHh2feu69d2tR3sM9P3Al4"
    },
    {
        id: 6,
        title: "Programming Fundamentals using Python",
        issuer: "Infosys Springboard",
        image: "https://images.unsplash.com/photo-1649180556628-9ba704115795?auto=format&fit=crop&w=800&q=80", // Python Logo style
        link: "https://www.linkedin.com/posts/aditya-raj-srivastava-401b75328_python-programming-coding-activity-7310895484221501441-wBMo?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLBHwEBn1cB8YHh2feu69d2tR3sM9P3Al4"
    },
    {
        id: 7,
        title: "Internship Completion",
        issuer: "Yhills",
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=800&q=80", // Digital/Online Award
        link: "https://www.linkedin.com/posts/aditya-raj-srivastava-401b75328_internshipexperience-wipro-yhills-activity-7345344768157057024-IgW9?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLBHwEBn1cB8YHh2feu69d2tR3sM9P3Al4"
    },
    {
        id: 8,
        title: "Internship Completion",
        issuer: "Codsoft",
        image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80", // Team/Work
        link: "https://www.linkedin.com/posts/aditya-raj-srivastava-401b75328_internship-codsoft-professionalgrowth-activity-7346566735824617473-f55D?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLBHwEBn1cB8YHh2feu69d2tR3sM9P3Al4"
    },
    {
        id: 9,
        title: "Intro to LLMs",
        issuer: "Microsoft",
        image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80", // AI Brain
        link: "https://www.linkedin.com/posts/aditya-raj-srivastava-401b75328_introduction-to-large-language-models-activity-7348779026137636864-ZXpq?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLBHwEBn1cB8YHh2feu69d2tR3sM9P3Al4"
    },
    {
        id: 10,
        title: "Prompt Engineering with GitHub Copilot",
        issuer: "Microsoft",
        image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80", // Code/Prompt
        link: "https://www.linkedin.com/posts/aditya-raj-srivastava-401b75328_introduction-to-prompt-engineering-with-github-activity-7348783577687285764-lZGA?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLBHwEBn1cB8YHh2feu69d2tR3sM9P3Al4"
    },
    {
        id: 11,
        title: "Python Dev Internship",
        issuer: "Developers Arena",
        image: "https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80", // Developer/Code
        link: "https://www.linkedin.com/posts/aditya-raj-srivastava-401b75328_pythondeveloper-internshipcompletion-developersarena-activity-7393579196423479296-YQVG?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFLBHwEBn1cB8YHh2feu69d2tR3sM9P3Al4"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('cert-stack-container');
    const dotsContainer = document.getElementById('cert-stack-dots');

    // Check if we are in dark mode (simple check based on filename or existing styles)
    const isDarkMode = window.location.pathname.includes('dark.html') || document.body.classList.contains('dark-mode');

    // Config matching reference image style
    const CARD_WIDTH = 500; // Wider landscape card
    const CARD_HEIGHT = 300;
    const MAX_VISIBLE_CARDS = 4;
    let activeIndex = 0;
    let intervalId;

    if (!container) return;

    function render() {
        container.innerHTML = '';
        const len = certificates.length;

        // Render Cards
        certificates.forEach((cert, i) => {
            // Calculate signed offset handling wrap-around
            let offset = i - activeIndex;
            if (offset > len / 2) offset -= len;
            if (offset < -len / 2) offset += len;

            const absOffset = Math.abs(offset);

            // Optimization: Only render visible cards
            if (absOffset > MAX_VISIBLE_CARDS) return;

            const card = document.createElement('div');

            // Math for the "Fan" effect
            const isActive = offset === 0;
            const scale = isActive ? 1.05 : 0.9 - (absOffset * 0.05);
            // Spread them out more: 60px * offset is too tight, try 200px equivalent spacing logic
            const translateX = offset * 240;
            const translateZ = isActive ? 0 : -absOffset * 100; // Push back for depth
            const rotateZ = offset * -5; // Negative rotation for fan arc (left tilts left)
            const rotateY = offset * 10; // Add some Y rotation for 3D look
            const zIndex = 100 - absOffset;
            const opacity = isActive ? 1 : 0.5; // Dim others significantly
            const blur = isActive ? 0 : '2px';

            const transform = `translateX(${translateX}px) translateZ(${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${scale})`;

            // Base styles
            card.className = `absolute rounded-3xl shadow-2xl overflow-hidden transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] cursor-pointer border border-white/10 bg-slate-900`;
            card.style.width = `${CARD_WIDTH}px`;
            card.style.height = `${CARD_HEIGHT}px`;
            card.style.zIndex = zIndex;
            card.style.transform = transform;
            card.style.opacity = opacity;
            card.style.filter = `blur(${blur})`;

            // Full Bleed Image + Gradient + Text Overlay
            card.innerHTML = `
                <!-- Full Background Image -->
                <div class="absolute inset-0">
                    <img src="${cert.image}" alt="${cert.title}" class="w-full h-full object-cover">
                    <!-- Dark Gradient Overlay for text readability -->
                    <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                </div>

                <!-- Text Content (Bottom Left) -->
                <div class="absolute bottom-0 left-0 p-8 w-full z-10 text-left">
                    <h3 class="text-2xl font-bold text-white mb-2 leading-tight drop-shadow-md">${cert.title}</h3>
                    <p class="text-slate-300 text-sm mb-4 font-medium tracking-wide border-l-2 border-[#0284c7] pl-3">${cert.issuer}</p>
                    
                    ${isActive ? `
                    <a href="${cert.link}" target="_blank" class="inline-flex items-center text-xs font-bold text-white bg-white/20 backdrop-blur-md px-4 py-2 rounded-full hover:bg-[#0284c7] transition-colors border border-white/20">
                        OPEN LINK <i class="fas fa-external-link-alt ml-2"></i>
                    </a>` : ''}
                </div>
            `;

            // Click to activate
            card.onclick = () => {
                const clickedOffset = i - activeIndex;
                if (clickedOffset === 0) {
                    if (cert.link && cert.link !== '#') window.open(cert.link, '_blank');
                } else {
                    setActive(i);
                    resetAutoPlay();
                }
            };

            container.appendChild(card);
        });

        // Render Dots
        if (dotsContainer) {
            dotsContainer.innerHTML = '';
            certificates.forEach((_, i) => {
                const dot = document.createElement('button');
                const isActive = i === activeIndex;
                // Always use white/gray dots because the section is dark or the cards are dark
                const dotColor = isActive ? 'bg-slate-800 dark:bg-white scale-125' : 'bg-slate-300 dark:bg-white/30';

                dot.className = `h-2 w-2 rounded-full transition-all duration-300 ${dotColor}`;
                dot.onclick = () => {
                    setActive(i);
                    resetAutoPlay();
                };
                dotsContainer.appendChild(dot);
            });
        }
    }

    function setActive(index) {
        activeIndex = index;
        render();
    }

    function next() {
        setActive((activeIndex + 1) % certificates.length);
    }

    function resetAutoPlay() {
        clearInterval(intervalId);
        intervalId = setInterval(next, 3000);
    }

    // Initialize
    render();
    resetAutoPlay();
});
