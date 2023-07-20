const navMenu = document.getElementById('navMenu');
const navBurger = document.getElementById('burger');
const homeBtn = document.getElementById('home-btn');
const browseBtn = document.getElementById('browse-btn');
const smallLogo = document.getElementById('background');
const LoginForm = document.getElementById('btns');
const profileBtn = document.getElementById('profile_btn');
const searchBtn = document.getElementById('search');
const searchBar = document.getElementById('search-bar');
const createNewBtn = document.getElementById('newEvent-btn');



navBurger.addEventListener('click', function(event){
    event.stopPropagation();
    event.preventDefault();
    navMenu.classList.toggle('is-active');
    console.log("clicked");
});

if (profileBtn) {
    profileBtn.addEventListener("click", function(){
        document.location.replace(`/my-profile`);
    })
};

homeBtn.addEventListener("click", function(){    
    document.location.replace('/');
});

smallLogo.addEventListener("click", function(){    
    document.location.replace('/');
});

// searchBtn.addEventListener("click", function(){    
//     document.location.replace('/search-results');
// });

browseBtn.addEventListener("click", function(){
    document.location.replace('/browse-events');
});

createNewBtn.addEventListener("click", function(){
    document.location.replace('/new-event');
})

if (LoginForm) {
    LoginForm.addEventListener("click", function(){
        document.location.replace('/login');
    });    
}
