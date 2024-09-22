// HEADER SECTION (navbar)

let menu = document.querySelector(".menu-bar");
let icon = document.querySelector(".menu-bar i");
let nav = document.querySelector("nav");
let header3 = document.querySelector(".header-3");
let scrolling = document.querySelector("a.scroll-top")

menu.onclick = function() {
    icon.classList.toggle("fa-times");
    nav.classList.toggle("active");
}


window.onscroll = () => {
    nav.classList.remove("active");
    effect();
    // myFunc()
    test();
}


function effect() {
    if (window.scrollY > 250) {
        scrolling.style.cssText = "display:block"
    } else {
        scrolling.style.cssText = "display:none"
    }
}


// let body1=document.querySelector("body");                    //another solution for scroll-top button
// function myFunc(){
//     let bodyDimin= body1.getBoundingClientRect().height;
//     scrolling.scrollTop +=bodyDimin
// }

function test() {
    if (window.scrollY > 250) {
        header3.classList.add("active")
    } else {
        header3.classList.remove("active")
    }
}




var swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
});


//DEAL SECTION

let countDate = new Date("2022 ,12 ,21 10:25:00").getTime();


function countDown() {
    let now = new Date().getTime();
    let gap = countDate - now;
    let second = 1000;
    let mins = second * 60;
    let hour = mins * 60;
    let day = hour * 24;
    let d = Math.floor(gap / day);
    let h = Math.floor((gap % (day)) / (hour))
    let m = Math.floor((gap % (hour)) / (mins))
    let s = Math.floor((gap % (mins)) / (second));

    document.getElementById("day").innerHTML = d;
    document.getElementById("hour").innerHTML = h;
    document.getElementById("minute").innerHTML = m;
    document.getElementById("second").innerHTML = s;
}
setInterval(function() {
    countDown();
}, 1000)