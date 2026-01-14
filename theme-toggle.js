// Lucide Icons (SVG)
const MOON_ICON = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-white"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
const SUN_ICON_DARK = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-gray-500"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
const SUN_ICON_LIGHT = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-gray-700"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;
const MOON_ICON_BLACK = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="w-4 h-4 text-black"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;

function toggleTheme() {
    const isDark = window.location.pathname.includes('dark.html');
    const newTheme = isDark ? 'light' : 'dark';
    const targetPage = isDark ? 'index.html' : 'dark.html';

    // Animate Toggle UI first
    renderToggleUI(!isDark); // Toggle visual state immediately

    // Save preference
    localStorage.setItem('theme', newTheme);

    // Fade Out Animation
    document.body.style.transition = 'opacity 0.5s ease';
    document.body.style.opacity = '0';

    // Redirect after animation
    setTimeout(() => {
        window.location.href = targetPage;
    }, 500);
}

// Make globally available
window.toggleTheme = toggleTheme;

function renderToggleUI(isDark) {
    const wrappers = document.querySelectorAll('.theme-toggle-wrapper');

    wrappers.forEach(container => {
        // Base classes
        const containerClass = `flex w-16 h-8 p-1 rounded-full cursor-pointer transition-all duration-300 ${isDark ? "bg-zinc-950 border border-zinc-800" : "bg-white border border-zinc-200"
            }`;

        // Knob Logic
        const knobClass = `flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300 ${isDark ? "transform translate-x-0 bg-zinc-800" : "transform translate-x-8 bg-gray-200"
            }`;

        const secondaryIconClass = `flex justify-center items-center w-6 h-6 rounded-full transition-transform duration-300 ${isDark ? "bg-transparent" : "transform -translate-x-8"
            }`;

        // HTML Structure
        container.innerHTML = `
            <div class="${containerClass}" role="button" tabindex="0">
                <div class="flex justify-between items-center w-full">
                    <div class="${knobClass}">
                        ${isDark ? MOON_ICON : SUN_ICON_LIGHT}
                    </div>
                    <div class="${secondaryIconClass}">
                        ${isDark ? SUN_ICON_DARK : MOON_ICON_BLACK}
                    </div>
                </div>
            </div>
        `;

        // Add CLick Event
        container.onclick = toggleTheme;
    });
}

// Check Preference on Load
document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    const isDarkPage = window.location.pathname.includes('dark.html');

    // Initial Render
    renderToggleUI(isDarkPage);

    // Fade In Animation
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';

    // Redirect logic
    if (savedTheme === 'dark' && !isDarkPage) {
        window.location.href = 'dark.html';
        return;
    }
    if (savedTheme === 'light' && isDarkPage) {
        window.location.href = 'index.html';
        return;
    }

    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 50);
});
