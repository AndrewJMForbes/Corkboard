const navMenu = document.getElementById('navMenu');
const navBurger = document.getElementById('burger');

console.log('nav.js');

navBurger.addEventListener('click', function(event){
    event.stopPropagation();
    event.preventDefault();
    navMenu.classList.toggle('is-active');
    console.log("clicked");
});
