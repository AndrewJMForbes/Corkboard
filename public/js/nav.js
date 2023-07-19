const navMenu = document.getElementById('navMenu');
const navBurger = document.getElementById('burger');
const homeBtn = document.getElementById('home-btn');
const browseBtn = document.getElementById('browse-btn');
const smallLogo = document.getElementById('background');
const LoginForm = document.getElementById('btns');
const profileBtn = document.getElementById('profile_btn');
const createNewBtn = document.getElementById('newEvent-btn');
const showEventBtn = document.getElementById('viewEventBtn');
const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search');


navBurger.addEventListener('click', function(event){
    event.stopPropagation();
    event.preventDefault();
    navMenu.classList.toggle('is-active');
    console.log("clicked");
});

if (profileBtn) {
    profileBtn.addEventListener("click", function(){
        document.location.replace('/profile');
    })
};

homeBtn.addEventListener("click", function(){    
    document.location.replace('/');
});

smallLogo.addEventListener("click", function(){    
    document.location.replace('/');
});

searchBtn.addEventListener("click", function(){    
    document.location.replace('/search-results');
});

browseBtn.addEventListener("click", function(){
    document.location.replace('/browse-events');
});

createNewBtn.addEventListener("click", function(){
    document.location.replace('/new-event');
});

if (showEventBtn){
    showEventBtn.addEventListener("click", function(){
    document.location.replace('/event/:id');
})}

if (LoginForm) {
    LoginForm.addEventListener("click", function(){
        document.location.replace('/login');
    });    
}
