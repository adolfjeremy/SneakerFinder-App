class SneakerItem extends HTMLElement {
    set sneaker(sneaker) {
        this._sneaker = sneaker;
        this.render();
    }
    render() {
        this.innerHTML = `
            <section>
                <img src="" alt="image">'
                <div class="sneaker-name-price">
                    <p class="sneaker-name>name</p>
                    <p class="sneaker-price>price</p>
                </div>
            </section>
        `;
    }
}

customElements.define("sneaker-item", SneakerItem);