function toggleTheme() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
}

if (localStorage.getItem('theme') === 'dark') document.body.classList.add('dark-mode');

window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loading-screen');
        loader.style.opacity = '0';
        setTimeout(() => loader.style.display = 'none', 500);
    }, 2000);
});

const pages = {
    home: `<h1>Welcome</h1><p>From Sibugay to Del Norte, I am Katrina Gabrielle Napigkit. Welcome to my professional portfolio.</p>`,
    intro: `<div class="intro-header"><img src="kat.jpg" alt="Profile" class="profile-img"><p class="subtitle">"From Sibugay to Del Norte, A BSIT student reporting for duty.."</p></div><h2>INTRO</h2><p>My name is Katrina Gabrielle Napigkit, a BSIT 2 student...</p>`,
    about: `<h2>ABOUT</h2><ul><li><strong>Technical Skills:</strong> C#, HTML, CSS, JS, SQL</li></ul>`,
    contact: `<h2>CONTACT</h2><input type="text" placeholder="Name">...`
};

function showPage(page) {
    const area = document.getElementById('contentArea');
    area.innerHTML = pages[page];
}

const nameText = "Katrina Gabrielle Napigkit";
const container = document.getElementById("nameContainer");
nameText.split("").forEach((char, index) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    span.style.animationDelay = `${index * 0.05}s`;
    container.appendChild(span);
});

showPage('home');