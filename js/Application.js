class Application {

    #menuModel;
    #menuEntryTypes;
    #rootView;
    #windowManager;
    #localStore;
    #videoPlayerEventBus;
    #selectMenuItemEventBus;
    #sessionEventBus;

    constructor() {

    }

    setMenuModel(menuModel) {
        this.#menuModel = menuModel;
    }

    setMenuEntryTypes(menuEntryTypes) {
        this.#menuEntryTypes = menuEntryTypes;
    }

    setRootView(rootView) {
        this.#rootView = rootView;
    }

    setWindowManager(windowManager) {
        this.#windowManager = windowManager;
    }

    setLocalStore(localStore) {
        this.#localStore = localStore;
    }

    setVideoPlayerEventBus(videoPlayerEventBus) {
        this.#videoPlayerEventBus = videoPlayerEventBus;
    }

    setSelectMenuItemEventBus(selectMenuItemEventBus) {
        this.#selectMenuItemEventBus = selectMenuItemEventBus;
    }

    setSessionEventBus(sessionEventBus) {
        this.#sessionEventBus = sessionEventBus;
    }

    init = () => {
        this.#initHeader();
    }

    #initHeader = () => {

        const headerBarBinding = new HeaderBarBindView(this.#rootView);
        const headerBarView = new HeaderBarView(headerBarBinding.getBinding());
        
        
        this.#selectMenuItemEventBus.subscribe(headerBarView.onSelectItemMenuListener);
        this.#videoPlayerEventBus.subscribe(headerBarView.onPlayNewVideo);
    }

    #onInitSideBar = () => {

    }

    #onInitVideoPlayer = () => {

    }

    #onInitNotesBar = () => {

    }

    #onInitFragmentController = () => {

    }

    #onInitSession = () => {

    }
}