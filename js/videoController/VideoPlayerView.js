class VideoPlayerView {

    #onPlayVideoEventBus;
    #playListController;
    
    #videoPlayer;
    #videoCaptations;
    
    constructor(binding) {
       
        binding.playButton.onclick = () => {
            this.togglePlayButton();
        };
        this.#videoPlayer = binding.videoPlayer;
        this.#videoCaptations = binding.videoCaptations;
 
    }

    setOnPlayVideoEventBus = (eventBus) => {
        this.#onPlayVideoEventBus = eventBus;
    }

    setPlayListController = (playListController) => {
        this.#playListController = playListController;
    }

    togglePlayButton = () => {
        
        
        if(!this.#videoPlayer.src) 
        {
            if(this.#playListController != null) {
                const currentVideo = this.#playListController.getCurrentIndexObject()
                this.playVideoById(currentVideo.key);
            }
            
        }
        else 
        {
            if(this.#videoPlayer.paused || this.#videoPlayer.ended) 
            {
                this.#videoPlayer.play();
                //todo chance play icon to pause icon   
            }
            else 
            {
                this.#videoPlayer.pause();
                //todo chance play icon to play icon   
            }
        }
    }

    //* play the video without notify */
    playVideoByIdSilently = (videoId) => {
        
        const videoModel = this.#playListController.getVideoByKeyId(videoId);
        if(videoModel != null) 
        {
            this.#playListController.setCurrentVideoByKeyId(videoId);
            this.#videoPlayer.pause();
            this.#videoPlayer.src = videoModel.uri;
            this.#videoPlayer.currentTime = 0;
            this.#videoCaptations.src = videoModel.captationsUri;
            this.#videoPlayer.play();

            //todo chance play icon to pause icon
            //todo checkIfHidePreviusButton();
            //todo checkIfHideNextButton();
        }
    }

    //* play the video and notify */
    playVideoById = (videoId) => {
        
        const videoModel = this.#playListController.getVideoByKeyId(videoId);
        if(videoModel != null) 
        {
            this.playVideoByIdSilently(videoId);
            if(this.#onPlayVideoEventBus != null) {
                this.#onPlayVideoEventBus.dispatch(videoModel);
            }
        }
    }
}

