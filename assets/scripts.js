const hamburger = document.querySelector('#hamburger');
const navbarItems = document.querySelector('#navbar-items');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('hamburger-active');
  navbarItems.classList.toggle('hidden');
});

window.addEventListener('click', (e) => {
  if (e.target != hamburger && e.target != navbarItems) {
    hamburger.classList.remove('hamburger-active');
    navbarItems.classList.add('hidden');
  }
});

window.onscroll = () => {
  const navbar = document.querySelector('header');
  const navbarFixed = navbar.offsetTop;
  const BackToTop = document.querySelector('#back-to-top');

  if(window.pageYOffset > navbarFixed) {
    navbar.classList.add('navbar-fixed');
    BackToTop.classList.remove('hidden');
    BackToTop.classList.add('flex');

  } else {
    navbar.classList.remove('navbar-fixed');
    BackToTop.classList.remove('flex');
    BackToTop.classList.add('hidden');
  }
}

const themeToggle = document.querySelector('#theme-toggle');
const html = document.querySelector('html');

themeToggle.addEventListener('click', () => {
  if (themeToggle.checked) {
    html.classList.add('dark')
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark')
    localStorage.theme = 'light'
  }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
  themeToggle.checked = true;
  console.log('HiDee')
} else {
  themeToggle.checked = false;
}