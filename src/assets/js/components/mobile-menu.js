class MobileMenu extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const mobileMenu = document.createElement("ul");
        mobileMenu.innerHTML = `
            <li><a>Nike</a></li>
            <li><a>Jordan</a></li>
            <li><a>Adidas</a></li>
            <li><a>Yeezy</a></li>
            <li><a>All brand</a></li>
        `;
        const mobileSearchForm = document.createElement("search-form");
        mobileSearchForm.setAttribute("class", "mobile-search");
        this.append(mobileMenu, mobileSearchForm);
    }
}

customElements.define("mobile-menu", MobileMenu);