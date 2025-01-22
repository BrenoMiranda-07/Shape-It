var typed = new Typed('#element', {
    strings: ['Here.', 'Now.', 'Today.'],
    typeSpeed: 75,
    backSpeed: 75,
    backDelay: 1000,
    loop: true
});


window.addEventListener('scroll', reveal);


function reveal() {
    var reveals = document.querySelectorAll('.reveal');


    for (var i = 0; i < reveals.length; i++) {


        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;


        if (revealtop < windowheight - revealpoint) {
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}




const cookiebox = document.querySelector(".wrapper"),
    acceptBtn = cookiebox.querySelector(".buttons button");
acceptBtn.onclick = () => {
    //setting cookie for 1 month, after 1 month cookie will be expired automatically
    document.cookie = "CookieBy=CodingNepal; max-age=" + 60 * 60 * 24 * 30;
    if (document.cookie) {//if the above cookie set
        cookieBox.classicList.add("hide");//hide cookie box once cookie set
    } else {
        alert("Cookie can't be set!");//if cookie can't be set the alert an error
    }
}
//lets hide the cookie box if the cookie is set and not expired
let checkCookie = document.cookie.indexOf("CookieBy=CodingNepal"); //checking our set cookie
//if cookie is set the hide the cookie box else show it
checkCookie != -1 ? cookieBox.classicList.add("hide") : cookieBox.classicList.remove("hide");