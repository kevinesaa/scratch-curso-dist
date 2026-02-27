class HeaderBarView {
    
    #headerTitleView;
    #browserTitleView;

    constructor(binding) {
        this.#headerTitleView = binding.headerTitleView;
        this.#browserTitleView = binding.browserTitleView;
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