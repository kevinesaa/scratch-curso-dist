class HeaderBarBindView {

    #binding = {};
    
    getBinding = () => {
        return this.#binding;
    }

    constructor(rootView) {

        this.#binding.headerTitleView = rootView.getElementById("header-title");
        this.#binding.browserTitleView = rootView.getElementById("browser-title"); 
    }
}