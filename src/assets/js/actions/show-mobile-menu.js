import { disableScroll } from "./disable-scroll.js";

export const showMobileMenu = () => {
    const mobileNavbarElement = document.querySelector("mobile-menu");
    const innerLine = document.querySelector(".inner-line");
    innerLine.classList.toggle("rotate");

    if (mobileNavbarElement.hasAttribute("hidden")) {
        mobileNavbarElement.classList.remove("slide-out");
        mobileNavbarElement.classList.add("slide-in");
        mobileNavbarElement.hidden = false;
    } else {
        mobileNavbarElement.classList.remove("slide-in");
        mobileNavbarElement.classList.add("slide-out");
        setTimeout(() => {
            mobileNavbarElement.hidden = true;
        }, 250);
    }
    disableScroll();
};