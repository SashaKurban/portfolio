document.addEventListener('DOMContentLoaded', navFunction)
let mobileNavOpen = false;

function navFunction(){
    const nav = document.querySelector('.nav-bar');
    nav.classList.toggle('show');
    mobileNavOpen = !mobileNavOpen;
}

function navLinkFunction(){
    const nav = document.querySelector('.nav-bar');
    if(mobileNavOpen){
        nav.classList.toggle('show');
        mobileNavOpen = !mobileNavOpen;
    }
    
}
