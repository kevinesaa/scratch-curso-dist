class SideBarMenuBindView {

    #binding = {};
    
    getBinding = () => {
        return this.#binding;
    }

    constructor(rootView) {
        
        this.#binding.navMenuView = rootView.getElementById("main-nav-bar");
        this.#binding.menuContainer = rootView.getElementById("nav-menu-container");
        this.#binding.menuCloseIcon = rootView.getElementById("nav-menu-icon-close");
        this.#binding.menuOpenIcon = rootView.getElementById("nav-menu-icon-open");
        this.#binding.menuCloseArea = rootView.getElementById("close-menu-area");
    }
}