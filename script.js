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
    intro: `<div class="intro-header"><img src="kat.jpg" alt="Profile" class="profile-img"><p class="subtitle">"From Sibugay to Del Norte, A BSIT student reporting for duty.."</p></div><h2>INTRO</h2><p>My name is Katrina Gabrielle Napigkit, a BSIT 2 student. My tech journey started because of someone. I then grew fond of and interested in system architecture and game development. Currently, I'm studying and exploring structures, I may still have weaknesses, however, my goal is grow along my tech journey.</p>`,
    about: `<h2>ABOUT</h2><ul><li><strong>Technical Skills:</strong> C#, HTML, CSS, JS, SQL</li><li><strong>Technical Passions:</strong> Bioinformatics, Data Visualization, Complex Systems.</li><li><strong>Hobbies:</strong> I enjoy exploring and building as I aim to build neat architecture.</li><li><strong>Career goal:</strong> To integrate Science and Technology, Create a neat architectural website/system</li></ul>`,
    contact: `<h2>CONTACT</h2><label>NAME</label><input type="text" placeholder="Your Name"><label>EMAIL</label><input type="email" placeholder="your.email@example.com"><label>

MESSAGE</label><textarea rows="4" placeholder="Write your message here..."></textarea><button>Send Message →</button>
            <div style="margin-top: 30px; border-top: 1px solid var(--accent); padding-top: 20px;">
                <p>Or find me here:</p>
                <a href="https://facebook.com" target="_blank" style="margin-right: 15px; color: var(--accent);">Facebook</a>
                <a href="https://github.com" target="_blank" style="margin-right: 15px; color: var(--accent);">GitHub</a>
                <a href="https://instagram.com" target="_blank" style="color: var(--accent);">Instagram</a>
            </div>`
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