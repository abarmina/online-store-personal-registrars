const dropdown1 = document.getElementById('dropdown1'),
      dropdown2 = document.getElementById('dropdown2');

document.addEventListener('click', (e) => {
    if (['dropdown1', 'dropdown2'].includes(e.target.id)) {
        e.target.classList.toggle('j-active');
        return;
    }
    dropdown1.classList.remove('j-active');
    dropdown2.classList.remove('j-active');
})
