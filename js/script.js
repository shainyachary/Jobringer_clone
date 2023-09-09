let menuicon =document.querySelector('#menuicon'),
    nav_links =document.querySelector('.nav_links');
    li = document.querySelectorAll('.nav_link');

menuicon.addEventListener('click', () => {
    nav_links.classList.toggle('active');
    menuicon.classList.toggle('active');
});

li.forEach((link) => link.addEventListener('click', () => {
    nav_links.classList.remove('active');
    menuicon.classList.remove('active');
}));