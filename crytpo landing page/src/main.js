
$(document).ready(() => {
    //// gsap plugin
    gsap.registerPlugin(
        ScrambleTextPlugin,
        ScrollTrigger,
        ScrollSmoother,
        SplitText,
        TextPlugin
    )

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