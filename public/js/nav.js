const navMenu = document.getElementById('navbarBasicExample');
const navBurger = document.getElementById('burger');

navBurger.addEventListener('click', function(event){
    event.stopPropagation();
    event.preventDefault();
    navMenu.classList.toggle('is-active');
});
