
class FrameScreenController {

    #fragmentLayouts = {};

    #internalPageViewContainer;
    #internalPageView;
    #internalPageCssDisplayClass;

    #videoContainerPageView;
    #videoContainerCssDisplayClass;

    #hideStyleCssClass;

    #menuItemTypes;

    #windowManager;

    constructor(menuItemTypes, windowManager) {
        this.#menuItemTypes = menuItemTypes;
        this.#windowManager = windowManager;
        this.#initMenuTypeViews();
    }

    #initMenuTypeViews() {
        
        const types = this.#menuItemTypes;
        this.#fragmentLayouts[types.video] = (menuItem) => { this.#displayVideoContainer (menuItem) };
        this.#fragmentLayouts[types.internalPage] = (menuItem) => { this.#displayInternalPageView (menuItem) };
        this.#fragmentLayouts[types.externalLink] = (menuItem) => { this.#openExternalPage (menuItem) };
    }

    setHideStyleClass = (hideStyleClass) => {
        this.#hideStyleCssClass = hideStyleClass;
    }

    setInternalContainerPageView = (view) => {
        this.#internalPageViewContainer = view;
    }

    setInternalPageView = (view) => {
        this.#internalPageView = view;
    }

    setInternalPageCssDisplayClass = (cssClass) => {
        this.#internalPageCssDisplayClass = cssClass;
    }

    setVideoContainerPageView = (view) => {
        this.#videoContainerPageView = view;
    }

    setVideoContainerCssDisplayClass = (cssClass) => {
        this.#videoContainerCssDisplayClass = cssClass;
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

    #openExternalPage = (menuItem) => {
        this.#windowManager.open(menuItem.uri, '_blank');
    }

    #displayInternalPageView(menuItem)
    {
        this.#videoContainerPageView.style.display = this.#hideStyleCssClass;
        this.#internalPageViewContainer.style.display = this.#internalPageCssDisplayClass;
        this.#internalPageView.data = menuItem.uri;
    }

    #displayVideoContainer(menuItem) {
        this.#internalPageViewContainer.style.display = this.#hideStyleCssClass;
        this.#videoContainerPageView.style.display = this.#videoContainerCssDisplayClass;
    }

}