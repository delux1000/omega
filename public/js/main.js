if (typeof AOS !== 'undefined') {
    AOS.init({ duration: 800, once: true, offset: 80 });
}

function initTypingEffect() {
    const typedElement = document.getElementById('typedElement');
    if (!typedElement) return;
    const words = ["Dignity", "Compassion", "Excellence", "24/7 Support", "We Care", "Professional Care"];
    let wordIndex = 0, charIndex = 0, isDeleting = false;
    function typeEffect() {
        if (!typedElement) return;
        let currentWord = words[wordIndex];
        if (isDeleting) {
            typedElement.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
        } else {
            typedElement.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
        }
        if (!isDeleting && charIndex === currentWord.length) {
            isDeleting = true;
            setTimeout(typeEffect, 1800);
            return;
        }
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            setTimeout(typeEffect, 300);
            return;
        }
        setTimeout(typeEffect, isDeleting ? 60 : 100);
    }
    typeEffect();
}

function updateWelcomeMessage() {
    const welcomeDiv = document.getElementById('welcomeMsg');
    if (!welcomeDiv) return;
    const hour = new Date().getHours();
    if (hour < 12) welcomeDiv.innerHTML = '<i class="fas fa-sun"></i> Good morning! Start your day with compassionate care';
    else if (hour < 18) welcomeDiv.innerHTML = '<i class="fas fa-cloud-sun"></i> Good afternoon! We\'re here to support you';
    else welcomeDiv.innerHTML = '<i class="fas fa-moon"></i> Good evening! 24/7 care always available';
}

const menuBtn = document.getElementById('menuToggleBtn');
const sidebar = document.getElementById('sidebarMenu');
const overlay = document.getElementById('overlayMenu');
const closeSidebarBtn = document.getElementById('closeSidebarBtn');

function openSidebar() { if (sidebar) sidebar.classList.add('open'); if (overlay) overlay.classList.add('active'); }
function closeSidebarFunc() { if (sidebar) sidebar.classList.remove('open'); if (overlay) overlay.classList.remove('active'); }

if (menuBtn) menuBtn.addEventListener('click', openSidebar);
if (closeSidebarBtn) closeSidebarBtn.addEventListener('click', closeSidebarFunc);
if (overlay) overlay.addEventListener('click', closeSidebarFunc);

document.querySelectorAll('.sidebar-nav a').forEach(link => {
    link.addEventListener('click', () => setTimeout(closeSidebarFunc, 150));
});

const liveBtn = document.getElementById('liveChatBtn');
const chatPopup = document.getElementById('chatPopup');
const closeChat = document.getElementById('closeChatBtn');

if (liveBtn) liveBtn.addEventListener('click', (e) => { e.stopPropagation(); if (chatPopup) chatPopup.style.display = 'block'; });
if (closeChat) closeChat.addEventListener('click', () => { if (chatPopup) chatPopup.style.display = 'none'; });

document.addEventListener('click', function(e) {
    if (chatPopup && chatPopup.style.display === 'block') {
        if (!chatPopup.contains(e.target) && e.target !== liveBtn && !liveBtn?.contains(e.target)) {
            chatPopup.style.display = 'none';
        }
    }
});

if (document.getElementById('typedElement')) { initTypingEffect(); updateWelcomeMessage(); }

const currentPath = window.location.pathname;
document.querySelectorAll('.sidebar-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPath || (currentPath === '/' && href === '/') || (currentPath.includes(href) && href !== '/' && href !== '#')) {
        link.classList.add('active');
    }
});

console.log('🌈 Omegar Care Limited - Enhanced Website Loaded');
