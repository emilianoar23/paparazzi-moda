function toggleNav() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.style.display = navLinks.style.display === 'none' || navLinks.style.display === '' ? 'flex' : 'none';
}