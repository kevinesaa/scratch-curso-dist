class HeaderBarView {
    
    #headerTitleView;
    #browserTitleView;

    constructor(headerViewContainer) {
        this.#headerTitleView = headerViewContainer.headerTitleView;
        this.#browserTitleView = headerViewContainer.browserTitleView;
    }

    setTitle = (title) => {
        this.#headerTitleView.innerText = title;
        this.#browserTitleView.innerText = title;
    }

    onPlayNewVideo = (video) => {
        
        if(video) {
            this.setTitle(video.title);
        }
    }

    onSelectItemMenuListener = (menuItem) => {
        
        if(menuItem) {
            this.setTitle(menuItem.title);
        }
    }
}