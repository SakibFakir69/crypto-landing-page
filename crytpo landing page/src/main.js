
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@12/swiper-bundle.min.mjs'
import 'swiper/css';

// Optional modules
import 'swiper/css/navigation';
import 'swiper/css/pagination';
$(document).ready(() => {
    //// gsap plugin
    gsap.registerPlugin(
        ScrambleTextPlugin,
        ScrollTrigger,
        ScrollSmoother,
        SplitText,
        TextPlugin
    )

    // slider
    const swiper = new Swiper('.swiper', {
        slidesPerView: 3, // default for large screens
        spaceBetween: 30,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 1, // default for smallest devices
        breakpoints: {
            480: { slidesPerView: 1 },
            768: { slidesPerView: 1 },
            1024: { slidesPerView: 3 },
        },
    });



    // jquery faq
    let counter = 0;


    document.getElementById("show1").addEventListener("click", () => {
        counter++;
        console.log("cliked")

        if (counter === 1) {
            document.getElementById("faq-text").innerText = "Store and manage your digital indentity"
        } else {


            document.getElementById("faq-text").innerText = "";
            counter = 0;

        }

    })

    let counter2 = 0;


    document.getElementById("show2").addEventListener("click", () => {
        counter2++;


        if (counter2 === 1) {
            document.getElementById("faq-text2").innerText = "Enhance transparency and accountbility"
        } else {


            document.getElementById("faq-text2").innerText = "";
            counter2 = 0;

        }

    })


    let counter3 = 0;


    document.getElementById("show3").addEventListener("click", () => {
        counter3++;


        if (counter3 === 1) {
            document.getElementById("faq-text3").innerText = "Enhance transparency and accountbility"
        } else {


            document.getElementById("faq-text3").innerText = "";
            counter3 = 0;

        }

    })


    // faq 4 
    let counter4 = 0;


    document.getElementById("show4").addEventListener("click", () => {
        counter4++;


        if (counter4 === 1) {
            document.getElementById("faq-text4").innerText = "Enhance transparency and accountbility"
        } else {


            document.getElementById("faq-text4").innerText = "";
            counter4 = 0;

        }

    })

    // coin  animation





    const comImg = document.getElementById("com-img");

    comImg.addEventListener("mouseover", () => {
        gsap.to(comImg, {
            x: 100,
            duration: 0.5,
            ease: "power2.in"
        })
    })

    comImg.addEventListener("mouseleave", () => {
        gsap.to(comImg, {
            x: 0,
            duration: 0.5,
            ease: "power2.in"
        })


    })
    // telgrame

    const telegram = document.getElementById("com-box2");

    telegram.addEventListener("mouseover", () => {


        gsap.to(telegram, {
            y: 50,
            duration: 0.5,
            ease: "back.out"
        })


    }
    )
    telegram.addEventListener("mouseleave", () => {
        gsap.to(telegram, {
            y: -50,
            duration: 0.5,
            ease: "back.out"
        })

    })

    // twitter and instagram
    const coin = document.getElementById("img-box-5");

    gsap.to(coin, {
        rotate: 360,
        duration: 6,
        delay: 0.4,
        repeat: -1


    })
    const twitter = document.getElementById("com-box4");
    gsap.to(twitter, {

        duration: 5,
        y: -60,
        repeat: -1,
        ease: "elastic"

    })
    const instagram = document.getElementById("com-box4-1");
    gsap.to(instagram, {

        duration: 5,
        y: -30,
        repeat: -1,
        ease: "elastic"

    })

    const medium = document.getElementById("com-box-6");

    medium.addEventListener("mouseenter", () => {
        gsap.to(medium, {
            opacity: 0.3

        })

    })
    medium.addEventListener("mouseleave", () => {
        gsap.to(medium, {
            opacity: 1

        })

    })
    // discord
    const discord = document.getElementById("com-box3");

    discord.addEventListener("mouseenter", () => {
        gsap.to(discord, {
            opacity: 0.3

        })

    })
    discord.addEventListener("mouseleave", () => {
        gsap.to(discord, {
            opacity: 1

        })


    })

    const coin2 = document.getElementById("com-img3");

    coin2.addEventListener("mouseenter", () => {
        gsap.to(coin2, {
            opacity: 0.3,
            scale: 2,

        })

    })
    coin2.addEventListener("mouseleave", () => {
        gsap.to(coin2, {
            opacity: 1,
            scale: 1

        })


    })

    // slider







    //   number animmation
    const timeLine = gsap.timeline();
    let animation = gsap.to("#h1-number", {
        duration: 3,
        innerText: 15 + "+",       // animate to 15
        snap: "innerText",   /// gave round number
        onUpdate: function () {
            this.targets()[0].textContent = this.targets()[0].innerText + "+";
        }


    });


    let animation2 = gsap.to("#h1-number2", {
        duration: 3,
        innerText: 5 + "K",       // animate to 15
        snap: "innerText",   /// gave round number



    })

    let animation3 = gsap.to("#h1-number3", {
        duration: 3,
        innerText: 98 + "%",       // animate to 15
        snap: "innerText",   /// gave round number



    })
    let animation4 = gsap.to("#h1-number4", {
        duration: 3,
        innerText: 120 + "+",       // animate to 15
        snap: "innerText",   /// gave round number
        onUpdate: function () {
            this.targets()[0].textContent = this.targets()[0].innerText + "+";
        }



    })
    timeLine.add(animation, animation2, animation3, animation4);








})