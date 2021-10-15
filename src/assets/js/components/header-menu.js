class HeaderMenu extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    set clickEvent(clickEvent) {
        this._clickEvent = clickEvent;
        this.renderMobileMenu();
    }

    render() {
        const appName = document.createElement("a");
        appName.innerText = "SneakerAddict";
        appName.setAttribute("class", "app-name");

        const navbar = document.createElement("nav");
        const navMenu = document.createElement("ul");
        navMenu.innerHTML = `
            <li><a>Nike</a></li>
            <li><a>Jordan</a></li>
            <li><a>Adidas</a></li>
            <li><a>Yeezy</a></li>
            <li><a>All brand</a></li>
        `;

        navbar.append(navMenu);

        const mobileHamburgerButton = document.createElement("button");
        mobileHamburgerButton.setAttribute("class", "hamburger");
        const innerLine = document.createElement("div");
        innerLine.setAttribute("class", "inner-line");
        mobileHamburgerButton.append(innerLine);

        const searchFormELement = document.createElement("search-form");
        searchFormELement.setAttribute("class", "dekstop-search");
        const mobileMenuELement = document.createElement("mobile-menu");
        mobileMenuELement.setAttribute("hidden", true);

        this.append(
            appName,
            navbar,
            searchFormELement,
            mobileHamburgerButton,
            mobileMenuELement
        );
    }

    renderMobileMenu() {
        this.querySelector(".hamburger").addEventListener(
            "click",
            this._clickEvent
        );
    }
}

customElements.define("header-menu", HeaderMenu);