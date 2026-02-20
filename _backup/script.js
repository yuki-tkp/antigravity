document.addEventListener('DOMContentLoaded', () => {

    // Navigation Toggle for Mobile
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Toggle Nav
        nav.classList.toggle('nav-active');

        // Burger Animation
        burger.classList.toggle('toggle');

        // Links Animation
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });

    // Close nav when link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('nav-active');
            burger.classList.remove('toggle');
        });
    });

    // Smooth Scrolling for Anchor Links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1, // Trigger when 10% of element is visible
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;

            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Only animate once
        });
    }, observerOptions);

    document.querySelectorAll('.scroll-reveal').forEach(el => {
        observer.observe(el);
    });

    // Form Mock Submission
    const form = document.getElementById('entryForm');
    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            // Basic Validation Check (HTML5 attribute handles most)
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;

            btn.innerText = 'SENDING...';
            btn.style.opacity = '0.7';

            // Mock network delay
            setTimeout(() => {
                alert('エントリーありがとうございます。\n担当者よりご連絡いたします。');
                form.reset();
                btn.innerText = originalText;
                btn.style.opacity = '1';
                // Reset form visual state if needed
            }, 1500);
        });
    }

    // Live Match Simulation
    function initLiveMatch() {
        const scoreAEl = document.getElementById('scoreA');
        const scoreBEl = document.getElementById('scoreB');
        const foulAEl = document.getElementById('foulA');
        const foulBEl = document.getElementById('foulB');
        const gameTimerEl = document.getElementById('gameTimer');
        const shotClockEl = document.getElementById('shotClock');
        const actionTextEl = document.getElementById('actionText');

        if (!scoreAEl) return;

        // Initial State
        let gameState = {
            time: 600, // 10:00
            shotClock: 12,
            scoreA: 18,
            scoreB: 19,
            foulsA: 4,
            foulsB: 5,
            possession: 'B'
        };

        function updateDisplay() {
            const minutes = Math.floor(gameState.time / 60);
            const seconds = gameState.time % 60;
            gameTimerEl.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
            shotClockEl.textContent = gameState.shotClock.toString().padStart(2, '0');

            // Color shot clock
            if (gameState.shotClock <= 5) {
                shotClockEl.style.color = '#ff0000';
            } else {
                shotClockEl.style.color = 'var(--accent-color)';
            }

            scoreAEl.textContent = gameState.scoreA;
            scoreBEl.textContent = gameState.scoreB;
            foulAEl.textContent = gameState.foulsA;
            foulBEl.textContent = gameState.foulsB;
        }

        setInterval(() => {
            if (gameState.time <= 0) {
                actionTextEl.textContent = "GAME OVER";
                return;
            }

            gameState.time--;
            gameState.shotClock--;

            // Random Events
            const rand = Math.random();

            if (gameState.shotClock < 0) {
                // Violation
                gameState.shotClock = 12;
                gameState.possession = gameState.possession === 'A' ? 'B' : 'A';
                actionTextEl.textContent = `SHOT CLOCK VIOLATION! ${gameState.possession === 'A' ? 'SHIBUYA' : 'HARAJUKU'} BALL.`;
            } else if (rand < 0.2) {
                // Action happens
                const eventType = Math.random();

                if (eventType < 0.5) {
                    // Score
                    const points = Math.random() > 0.7 ? 2 : 1;
                    if (gameState.possession === 'A') gameState.scoreA += points;
                    else gameState.scoreB += points;

                    actionTextEl.textContent = `${gameState.possession === 'A' ? 'SHIBUYA' : 'HARAJUKU'} SCORES ${points} PTS!`;
                    gameState.shotClock = 12;
                    gameState.possession = gameState.possession === 'A' ? 'B' : 'A';
                } else if (eventType < 0.8) {
                    // Miss & Rebound
                    actionTextEl.textContent = `MISSED SHOT BY ${gameState.possession === 'A' ? 'SHIBUYA' : 'HARAJUKU'}!`;
                    if (Math.random() > 0.5) {
                        // Defensive Rebound (Switch possession)
                        gameState.possession = gameState.possession === 'A' ? 'B' : 'A';
                        gameState.shotClock = 12;
                    } else {
                        // Offensive Rebound (Reset to 12)
                        gameState.shotClock = 12;
                    }
                } else {
                    // Foul
                    if (gameState.possession === 'A') gameState.foulsB++;
                    else gameState.foulsA++;
                    actionTextEl.textContent = `FOUL ON ${gameState.possession === 'A' ? 'HARAJUKU' : 'SHIBUYA'}!`;
                }
            }

            updateDisplay();
        }, 1000);

        updateDisplay();
    }

    initLiveMatch();

});

/* Add simple CSS animation for nav links dynamically if needed, 
   though it's cleaner to keep in CSS. Adding here just for the burger logic reference above */
const styleSheet = document.createElement("style");
styleSheet.innerText = `
@keyframes navLinkFade {
    from { opacity: 0; transform: translateX(50px); }
    to { opacity: 1; transform: translateX(0); }
}
.toggle .line1 { transform: rotate(-45deg) translate(-5px, 6px); }
.toggle .line2 { opacity: 0; }
.toggle .line3 { transform: rotate(45deg) translate(-5px, -6px); }
`;
document.head.appendChild(styleSheet);
