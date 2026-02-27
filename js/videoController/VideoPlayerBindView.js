class VideoPlayerBindView {

    #binding = {};
    
    getBinding = () => {
        return this.#binding;
    }

    constructor(rootView) {
        this.#binding.videoSectionContainer = rootView.getElementById("video-section");
        this.#binding.videoCaptations = rootView.getElementById("video-captation");
        this.#binding.videoPlayer = rootView.getElementById("video-player");
        this.#binding.audioButton = rootView.getElementById("audio-button");
        this.#binding.videoCurrentTimeDisplay = rootView.getElementById("current-video-time-display");
        this.#binding.goToPreviusVideoButton = rootView.getElementById("go-to-previous-video");
        this.#binding.playButton = rootView.getElementById("play-video-button");
        this.#binding.goToNextVideoButton = rootView.getElementById("go-to-next-video");
        this.#binding.videoDurationDisplay = rootView.getElementById("video-time-duration-display");
        this.#binding.videoSubtitleButton = rootView.getElementById("video-subtitle-button");
        this.#binding.videoFullScreenButton = rootView.getElementById("video-fullscreen-button");
    }
}