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

    }

    #onInitHeader = () => {

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