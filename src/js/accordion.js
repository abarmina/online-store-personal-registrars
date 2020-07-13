document.getElementById('accordion').addEventListener('click', (e)=> {
    if (!e.target.classList.contains('tab')) return;
    
    document.querySelector('.page.j-active').classList.remove('j-active');
    document.querySelector('.tab.j-active').classList.remove('j-active');

    const id = (e.target.id.split('-'))[1];
    document.getElementById(`page-${id}`).classList.add('j-active')
    document.getElementById(`tab-${id}`).classList.add('j-active')
})
