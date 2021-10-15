import { showMobileMenu } from "./actions/show-mobile-menu.js";

const headerMenuElement = document.querySelector("header-menu");

headerMenuElement.clickEvent = showMobileMenu;