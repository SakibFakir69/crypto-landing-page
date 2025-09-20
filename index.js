$(document).ready(() => {
    //// gsap plugin
    gsap.registerPlugin(
        ScrambleTextPlugin,
        ScrollTrigger,
        ScrollSmoother,
        SplitText,
        TextPlugin
    )

    console.log('index js file running')
})
