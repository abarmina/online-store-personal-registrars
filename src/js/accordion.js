const tab1 = document.getElementById('tab1'),
      tab2 = document.getElementById('tab2'),
      navigation = document.querySelectorAll('.nav__link'),
      page1 = document.getElementById('page1'),
      page2 = document.getElementById('page2');

tab1.addEventListener('click', () => {
    tab2.classList.remove('nav__link--j-active');
    page2.classList.remove('j-active');
    page1.classList.add('j-active');
    tab1.classList.add('nav__link--j-active');
});

tab2.addEventListener('click', () => {
    tab1.classList.remove('nav__link--j-active');
    page1.classList.remove('j-active');
    page2.classList.add('j-active');
    tab2.classList.add('nav__link--j-active');
});
