const page1 = document.getElementById('nav1'),
      page2 = document.getElementById('nav2'),
      navigation = document.querySelectorAll('.nav__link'),
      description = document.getElementById('description'),
      reviews = document.getElementById('reviews');

page1.addEventListener('click', () => {
    page2.classList.remove('nav__link--j-active');
    reviews.classList.remove('j-active');
    description.classList.add('j-active');
    page1.classList.add('nav__link--j-active');
});

page2.addEventListener('click', () => {
    page1.classList.remove('nav__link--j-active');
    description.classList.remove('j-active');
    reviews.classList.add('j-active');
    page2.classList.add('nav__link--j-active');
});
