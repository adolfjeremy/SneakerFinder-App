import "./sneaker-item.js";
class SneakerList extends HTMLElement {
    set sneakers(sneakers) {
        this._sneakers = sneakers;
        this.render();
    }

    render() {
        this._sneakers.forEach((sneaker) => {
            const sneakerItemElement = document.createElement("sneaker-item");
            sneakerItemElement.sneaker = sneaker;
            this.appendChild(sneakerItemElement);
        });
    }
}

customElements.define("sneaker-list", SneakerList);