export const disableScroll = () => {
    const bodyElement = document.querySelector("body");
    bodyElement.classList.toggle("no-scroll");
};