
class FrameScreenControllerBindView {

    #binding = {};
    
    getBinding = () => {
        return this.#binding;
    }

    constructor(rootView) {
        
        this.#binding.internalPageContainer = rootView.getElementById("internal-page-fragment-container");
        this.#binding.internalPageDisplay = rootView.getElementById("object-internal-page-view");
        this.#binding.videoFragmentContainer = rootView.getElementById("video-screen-fragment-container"); 

       
    }
}