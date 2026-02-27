class VideoPlayerBuilder {
    
    #eventBus;
    #sourcePlayListDictionary;
    #rootView;
    #menuItemTypes;

    constructor() {
    }

    setEventBus = (eventBus) => {
        this.#eventBus = eventBus;
        return this;
    }

    setSourcePlayListDictionary = (playList) => {
        this.#sourcePlayListDictionary = playList;
        return this;
    }

    setRootView = (rootView) => {
        this.#rootView =rootView;
        return this;
    }
    
    setMenuItemTypes = (menuItemTypes) => {
        this.#menuItemTypes = menuItemTypes;
        return this;
    }

    build() {
        
        const videoPlayerBinding = new VideoPlayerBindView(this.#rootView);
        const videoPlayerView = new VideoPlayerView(videoPlayerBinding.getBinding(),this.#menuItemTypes);
        
        if (this.#sourcePlayListDictionary) {
            const playListController = new PlayListController(this.#sourcePlayListDictionary)
            videoPlayerView.setPlayListController(playListController);
        }

        if (this.#eventBus) {
            videoPlayerView.setOnPlayVideoEventBus(this.#eventBus);
        }

        return videoPlayerView;
    }
}