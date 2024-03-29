function menuIn() {
    let manu = document.getElementById('manu');
    let menuBtn = document.getElementById('menuBtn');
    let closeBtn = document.getElementById('close');


    menuBtn.addEventListener("click", () => {
        let tl = gsap.timeline()
        tl.to(menuBtn, { duration: 0.5, opacity: 0, ease: 'power2.inOut' });
        tl.to(manu, { duration: 0.5, y: "100vh", delay: -0.8, ease: 'power2.inOut' });
        tl.from("#M-right h3", {
            y: -200,
            stagger: 0.3,
            opacity: -2,
            duration: 0.5,
        }, 'same')

        tl.from("#left video", {
            scale: -2,
            opacity: -2,
            duration: 1,
        }, "same")
        tl.to("#close", { duration: 0.5, opacity: 1, delay: -0.8, ease: 'power2.inOut' });
    })


    closeBtn.addEventListener("click", () => {
        const tl = gsap.timeline()
        tl.to("#close", { opacity: 0, ease: 'power2.inOut' });
        tl.to(manu, { y: "-100vh", ease: 'power2.inOut', delay:-1 });

        tl.to(menuBtn, { opacity: 1, delay: -1, ease: 'power2.inOut' });
    })
}


function scroll() {

    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll

    const locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main"),
        smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);

    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
        scrollTop(value) {
            return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        getBoundingClientRect() {
            return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
        },
        // pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        // pinType: document.querySelector(".smooth-scroll").style.transform ? "transform" : "fixed"
    });






    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}

const cursorIffect = (() => {
    const cursor = document.querySelector("#cursor"),
        page1Content = document.querySelector("#page1-con")
    page1Content.addEventListener("mousemove", (x) => {
        gsap.to(cursor, {
            x: x.x,
            y: x.y
        })
    })

    page1Content.addEventListener("mouseenter", (() => {
        gsap.to(cursor, {
            scale: 1
        })
    }))

    page1Content.addEventListener("mouseleave", (() => {
        gsap.to(cursor, {
            scale: 0
        })
    }))
})

function page2_4_Animation() {

    gsap.from("#elem1 h1", {
        y: 130,
        stagger: 0.25,
        duration: 2,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 90% ",
            end: "top 37% ",
            // markers: true,
            scrub: 2
        }
    })

    gsap.from("#elem1 h2", {
        xPercent: -250,
        stagger: 0,
        duration: 2,
        scrollTrigger: {
            trigger: "#page2",
            scroller: "#main",
            start: "top 90% ",
            end: "top 37% ",
            // markers: true,
            scrub: 1,

        }
    })


    // page 3 
    gsap.from("#page3-top h2", {
        y: 130,
        stagger: 0.25,
        duration: 2,
        scrollTrigger: {
            trigger: "#page3",
            scroller: "#main",
            start: "top 90% ",
            end: "top 77% ",
            // markers: true,
            scrub: 2
        }
    })





    // page 4
    gsap.from("#elem2 h1", {
        y: 130,
        stagger: 0.25,
        duration: 2,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 90% ",
            end: "top 40% ",
            // markers: true,
            scrub: 2
        }
    })

    gsap.from("#elem2 h2", {
        xPercent: -250,
        stagger: 0,
        duration: 2,
        scrollTrigger: {
            trigger: "#page4",
            scroller: "#main",
            start: "top 90% ",
            end: "top 37% ",
            // markers: true,
            scrub: 1,

        }
    })


    // page 5
    gsap.from("#num h1", {
        y: -1030,
        stagger: 0.25,
        duration: 100,
        scrollTrigger: {
            trigger: "#page5",
            scroller: "#main",
            start: "top 50% ",
            end: "top 37% ",
            // markers: true,
            scrub: 2
        }
    })


}

function page5Cursor() {
    const cursor = document.querySelector("#cursor2"),
        page5con = document.querySelector("#page5")

    page5con.addEventListener("mousemove", (x) => {
        gsap.to(cursor, {
            x: x.x,
            y: x.y
        })
    })

    page5con.addEventListener("mouseenter", (() => {
        document.querySelector("#cursor2").style.opacity = 1;
        gsap.to(cursor, {
            scale: 1
        })
    }))
    page5con.addEventListener("mouseleave", (() => {
        gsap.to(cursor, {
            scale: 0
        })
    }))
}

function swiper() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: true,
        },
    });
}

function loader() {
    let tl = gsap.timeline()

    tl.from("#loader h3", {
        x: 40,
        // y:100,
        opacity: 0,
        duration: 1,
        stagger: 0.2
    })

    tl.to("#loader h3", {
        x: -40,
        opacity: 0,
        duration: 1,
        stagger: 0.1
    })

    tl.to("#loader", {
        opacity: 0
    })

    tl.to("#loader", {
        display: "none"
    })

    tl.from("#page1-con h1 span", {
        y: 100,
        opacity: 0,
        stagger: 0.1,
        delay: -0.8
    })

}

function footerCon() {
    gsap.from("#footerlast h1 span", {
        y: -200,
        stagger: 0.3,
        opacity: -2,
        duration: 3,
        scrollTrigger: {
            trigger: "#page7",
            scroller: "#main",
            start: "top 75%",
            end: "top 47%",
            scrub: 2
        }
    });


}


// MenuSec()

menuIn()
loader()
swiper()
scroll()
page2_4_Animation()
cursorIffect()
page5Cursor()
footerCon()

