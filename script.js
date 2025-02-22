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
  
  document.addEventListener("DOMContentLoaded", () => typeEffect());

// Function to toggle dark mode
function toggleDarkMode() {
  const body = document.body;
  const themeToggleDesktop = document.getElementById('theme-toggle');
  const themeToggleMobile = document.getElementById('theme-toggle-mobile');

  body.classList.toggle('dark-mode');

  // Change the button text based on the current mode
  if (body.classList.contains('dark-mode')) {
    if (themeToggleDesktop) themeToggleDesktop.textContent = '☀️';
    if (themeToggleMobile) themeToggleMobile.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  } else {
    if (themeToggleDesktop) themeToggleDesktop.textContent = '🌙';
    if (themeToggleMobile) themeToggleMobile.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  }
}

document.getElementById('theme-toggle')?.addEventListener('click', toggleDarkMode);
document.getElementById('theme-toggle-mobile')?.addEventListener('click', toggleDarkMode);

document.addEventListener('DOMContentLoaded', loadTheme);