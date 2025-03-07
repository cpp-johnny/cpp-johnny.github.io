function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

const phrases = [
  "Tech Enthusiast",
  "Curious Thinker", 
  "Problem Solver",
  "I use Arch, BTW."
];
let i = 0;
let j = 0;
let isDeleting = false;
let speed = 150;

function typeEffect() {
  const typingText = document.querySelector(".typing-text");
  const currentPhrase = phrases[i];
  
  if (!isDeleting && j < currentPhrase.length) {
    typingText.innerHTML = currentPhrase.substring(0, j + 1) + "|";
    j++;
    speed = 150;
  } else if (isDeleting && j > 0) {
    typingText.innerHTML = currentPhrase.substring(0, j - 1) + "|";
    j--;
    speed = 75;
  } else if (!isDeleting && j === currentPhrase.length) {
    speed = 1000;
    isDeleting = true;
  } else if (isDeleting && j === 0) {
    isDeleting = false;
    i = (i + 1) % phrases.length;
    speed = 500;
  }
  setTimeout(typeEffect, speed);
}

// Function to toggle dark mode - completely rewritten
function toggleDarkMode(event) {
  // Prevent default behavior and stop propagation
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  
  const body = document.body;
  const themeToggleDesktop = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');

  body.classList.toggle('dark-mode');

  // Change the button text based on the current mode
  if (body.classList.contains('dark-mode')) {
    if (themeToggleDesktop) themeToggleDesktop.textContent = '☀️';
    if (themeToggleMobile) themeToggleMobile.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
    console.log('Dark mode enabled');
  } else {
    if (themeToggleDesktop) themeToggleDesktop.textContent = '🌙';
    if (themeToggleMobile) themeToggleMobile.textContent = '🌙';
    localStorage.setItem('theme', 'light');
    console.log('Light mode enabled');
  }
}

function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  const body = document.body;
  const themeToggleDesktop = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');

  if (savedTheme === 'dark') {
    body.classList.add('dark-mode');
    if (themeToggleDesktop) themeToggleDesktop.textContent = '☀️';
    if (themeToggleMobile) themeToggleMobile.textContent = '☀️';
  }
}

// Initialize everything when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  // Start typing effect
  typeEffect();
  
  // Load saved theme
  loadTheme();
  
  // Set up event listeners for theme toggles
  const themeToggleDesktop = document.getElementById('theme-toggle');
  if (themeToggleDesktop) {
    themeToggleDesktop.addEventListener('click', toggleDarkMode);
  }
  
  // Important: Remove the onclick attribute from the mobile button in the HTML
  // and set up the event listener here instead
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');
  if (themeToggleMobile) {
    // Remove any existing onclick attribute
    themeToggleMobile.removeAttribute('onclick');
    
    // Add event listener with direct function reference
    themeToggleMobile.addEventListener('click', function(e) {
      console.log('Mobile toggle clicked');
      toggleDarkMode(e);
    });
  }
});