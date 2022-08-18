let mobileNavOpen = false;


function navFunction(){
    const nav = document.querySelector('.nav-bar');
    nav.classList.toggle('show');
    document.body.classList.toggle("no-scroll");
    mobileNavOpen = !mobileNavOpen;
}

function navLinkFunction(){
    const nav = document.querySelector('.nav-bar');
    if(mobileNavOpen){
        document.body.classList.toggle("no-scroll");
        nav.classList.toggle('show');
        mobileNavOpen = !mobileNavOpen;
    }
    
}
