// initialization

const RESPONSIVE_WIDTH = 1024

let headerWhiteBg = false
let isHeaderCollapsed = window.innerWidth < RESPONSIVE_WIDTH
const collapseBtn = document.getElementById("collapse-btn")
const collapseHeaderItems = document.getElementById("collapsed-header-items")



function onHeaderClickOutside(e) {

    if (!collapseHeaderItems.contains(e.target)) {
        toggleHeader()
    }

}


function toggleHeader() {
    if (isHeaderCollapsed) {
        // expand
        collapseHeaderItems.classList.add("opacity-100")
        collapseHeaderItems.style.width = "60vw"
        collapseBtn.classList.remove("bi-list")
        collapseBtn.classList.add("bi-x", "max-lg:tw-fixed")
        collapseBtn.setAttribute("aria-expanded", "true")
        isHeaderCollapsed = false

        setTimeout(() => window.addEventListener("click", onHeaderClickOutside), 1)
    } else {
        // collapse
        collapseHeaderItems.classList.remove("opacity-100")
        collapseHeaderItems.style.width = "0vw"
        collapseBtn.classList.remove("bi-x", "max-lg:tw-fixed")
        collapseBtn.classList.add("bi-list")
        collapseBtn.setAttribute("aria-expanded", "false")
        isHeaderCollapsed = true
        window.removeEventListener("click", onHeaderClickOutside)
    }
}

function responsive() {
    if (window.innerWidth > RESPONSIVE_WIDTH) {
        collapseHeaderItems.style.width = ""

    } else {
        isHeaderCollapsed = true
    }
}

window.addEventListener("resize", responsive)

// Header style toggles based on hero section visibility
;(function setupHeaderObserver(){
    const headerEl = document.querySelector('header')
    const heroEl = document.querySelector('.hero')
    if (!headerEl || !heroEl || !('IntersectionObserver' in window)) return

    const io = new IntersectionObserver(([entry]) => {
        if (entry && entry.isIntersecting) {
            headerEl.classList.add('header--on-hero')
            headerEl.classList.remove('header-solid')
        } else {
            headerEl.classList.remove('header--on-hero')
            headerEl.classList.add('header-solid')
        }
    }, { threshold: 0.6 })

    io.observe(heroEl)
})()


/**
 * Animations
 */

gsap.registerPlugin(ScrollTrigger)


const numberTimeline = gsap.timeline({paused: true, scrollTrigger: {
    trigger: "#numbers",
    start: "100% 100%", // when the top of the trigger hits the top of the viewport
    end: "100% 90%", // when bottom trigger hits bottom of the viewport
    // markers: true,
}
})

numberTimeline.fromTo("#numbers-container", {
    scale: 0.8,
}, {

    scale: 1,
    duration: 3
}).to("#installs", {
    innerText: 100,
    duration: 3,
    snap: {
        innerText: 1
    },
}, "<").to("#minutes", {
    innerText: 400,
    duration: 3,
    snap: {
        innerText: 1
    }
}, "<")