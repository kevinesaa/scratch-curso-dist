
class FrameScreenControllerView {

    static #DISPLAY_NONE = 'none';

    #fragmentLayouts = {};

    #internalPageViewContainer;
    #internalPageView;
    #internalPageCssDisplayClass;

    #videoContainerPageView;
    #videoContainerCssDisplayClass;
    
    #menuItemTypes;

    #windowManager;

    constructor(windowManager,binding, menuItemTypes) {
        
        this.#menuItemTypes = menuItemTypes;
        this.#windowManager = windowManager;
        this.#initMenuTypeViews();

        this.#internalPageViewContainer = binding.internalPageContainer;
        this.#internalPageView = binding.internalPageDisplay;
        this.#videoContainerPageView = binding.videoFragmentContainer;
        
        this.#internalPageCssDisplayClass = binding.internalPageContainer.style.display;
        this.#videoContainerCssDisplayClass = binding.videoFragmentContainer.style.display;
        
    }

    onSelectMenuItemListener = (item) => {
        
        if(item.type)
        {
            const func = this.#fragmentLayouts[item.type];
            if(func)
            {
                func(item);
            }
        }
    }

    #initMenuTypeViews() {
        
        const types = this.#menuItemTypes;
        this.#fragmentLayouts[types.video] = (menuItem) => { this.#displayVideoContainer (menuItem) };
        this.#fragmentLayouts[types.internalPage] = (menuItem) => { this.#displayInternalPageView (menuItem) };
        this.#fragmentLayouts[types.externalLink] = (menuItem) => { this.#openExternalPage (menuItem) };
    }

    #openExternalPage = (menuItem) => {
        this.#windowManager.open(menuItem.uri, '_blank');
    }

    #displayInternalPageView(menuItem)
    {
        this.#videoContainerPageView.style.display = FrameScreenControllerView.#DISPLAY_NONE;
        this.#internalPageViewContainer.style.display = this.#internalPageCssDisplayClass;
        this.#internalPageView.data = menuItem.uri;
    }

    #displayVideoContainer(menuItem) {
        this.#internalPageViewContainer.style.display = FrameScreenControllerView.#DISPLAY_NONE;
        this.#videoContainerPageView.style.display = this.#videoContainerCssDisplayClass;
    }

}