class VideoPlayerBuilder {
    
    #eventBus;
    #sourcePlayListDictionary;
    #rootView;

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

    build() {
        
        const videoPlayerBinding = new VideoPlayerBindView(this.#rootView);
        const videoPlayerView = new VideoPlayerView(videoPlayerBinding.getBinding());
        
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