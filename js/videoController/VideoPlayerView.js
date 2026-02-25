class VideoPlayerView {

    static #DISPLAY_NONE = 'none';

    #onPlayVideoEventBus;
    #playListController;

    #videoPlayer;
    #videoCaptations;
    #goToPreviusVideoButton;
    #goToNextVideoButton;
    #previusVideoButtonDisplayClass;
    #nextVideoButtonDisplayClass;
    #videoDurationDisplay;
    #videoCurrentTimeDisplay;

    constructor(binding) {

        binding.playButton.onclick = () => {
            this.togglePlayButton();
        };

        binding.goToPreviusVideoButton.onclick = () => {
            this.goToPreviousVideo();
        };

        binding.goToNextVideoButton.onclick = () => {
            this.goToNextVideo();
        };

        binding.videoSubtitleButton.onclick = () => {
            this.#toggleSubtitles();
        };

        this.#videoPlayer = binding.videoPlayer;
        this.#videoCaptations = binding.videoCaptations;

        this.#goToPreviusVideoButton = binding.goToPreviusVideoButton;
        this.#goToNextVideoButton = binding.goToNextVideoButton;

        this.#previusVideoButtonDisplayClass = binding.goToPreviusVideoButton.style.display;
        this.#nextVideoButtonDisplayClass = binding.goToNextVideoButton.style.display;

        this.#videoDurationDisplay = binding.videoDurationDisplay;
        this.#videoCurrentTimeDisplay = binding.videoCurrentTimeDisplay;

        this.#videoPlayer.addEventListener('loadedmetadata', () => this.updateVideoDuration());
        this.#videoPlayer.addEventListener('timeupdate', () => this.updateCurrentTime());
        
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
            this.#toggleSubtitles();
            this.#videoPlayer.src = videoModel.uri;
            this.#videoPlayer.currentTime = 0;
            this.#videoCaptations.src = videoModel.captationsContent;
            this.#updateNavigationButtonVisibility();
            this.#videoPlayer.play();
            this.#toggleSubtitles();

            //todo chance play icon to pause icon
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

    goToPreviousVideo = () => {
        if(this.#playListController != null) {
            const videoModel = this.#playListController.moveBackward();
            if(videoModel != null) {
                this.playVideoById(videoModel.id);
            }
        }
    }

    goToNextVideo = () => {
        if(this.#playListController != null) {
            const videoModel = this.#playListController.moveForeward();
            if(videoModel != null) {
                this.playVideoById(videoModel.id);
            }
        }
    }

    #updateNavigationButtonVisibility = () => {
        if(this.#playListController != null) {
            if(this.#playListController.hasPrevius()) {
                this.#goToPreviusVideoButton.style.display = this.#previusVideoButtonDisplayClass;
            } else {
                this.#goToPreviusVideoButton.style.display = VideoPlayerView.#DISPLAY_NONE;
            }

            if(this.#playListController.hasNext()) {
                this.#goToNextVideoButton.style.display = this.#nextVideoButtonDisplayClass;
            } else {
                this.#goToNextVideoButton.style.display = VideoPlayerView.#DISPLAY_NONE;
            }
        }
    }

    #toggleSubtitles = () => {
        const textTrack = this.#videoPlayer.textTracks[0];
        if(textTrack) {
            const captationShowState = 'showing';
            const captationHideState = 'hidden';
            if(textTrack.mode == captationShowState) 
            {
                textTrack.mode = captationHideState;
            }
            else 
            {
                textTrack.mode = captationShowState;
            }
        }
    }


    updateVideoDuration = () => {
        const duration = this.#videoPlayer.duration;
        const formattedTime = this.#formatVideoTime(duration);
        this.#videoDurationDisplay.textContent = `${formattedTime.minute}:${formattedTime.seconds}`;
    }


    updateCurrentTime = () => {
        const currentTime = this.#videoPlayer.currentTime;
        const formattedTime = this.#formatVideoTime(currentTime);
        this.#videoCurrentTimeDisplay.textContent = `${formattedTime.minute}:${formattedTime.seconds}`;
    }


    #formatVideoTime = (timeInSeconds) => {
        
        if(!timeInSeconds) {
            return { minute: "00", seconds: "00" };
        }
        
        const minutes = Math.floor(timeInSeconds / 60);
        const seconds = Math.floor(timeInSeconds % 60);

        const minuteStr = String(minutes).padStart(2, '0');
        const secondsStr = String(seconds).padStart(2, '0');

        return { minute: minuteStr, seconds: secondsStr };
    }

}


