class SearchForm extends HTMLElement {
    connectedCallback() {
        this.render();
    }

    render() {
        const formElement = document.createElement("form");
        formElement.setAttribute("id", "SearchForm");
        const userInputElement = document.createElement("input");
        userInputElement.setAttribute("id", "userInput");
        const submitButtonElement = document.createElement("button");
        submitButtonElement.setAttribute("id", "submitButton");
        submitButtonElement.setAttribute("type", "button");
        submitButtonElement.innerText = "Search";

        formElement.append(userInputElement, submitButtonElement);
        this.append(formElement);
    }
}

customElements.define("search-form", SearchForm);