const submenu = document.getElementById('j-submenu'),
      submenuActiveLink = document.getElementById('j-submenu-link'),
      submenuArrow = document.getElementById('j-submenu-arrow');

submenuActiveLink.addEventListener('click', () => {
    submenu.classList.toggle('j-active');
    submenuArrow.classList.toggle('menu__icon--j-active');
});
