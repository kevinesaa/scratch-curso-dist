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
        this.#initSideBar();
        this.#initVideoPlayer();
        this.#initNotesBar();
        this.#initFragmentController();
        this.#initHeader();
        this.#initSession();
    }

    #initHeader = () => {

        const headerBarBinding = new HeaderBarBindView(this.#rootView);
        const headerBarView = new HeaderBarView(headerBarBinding.getBinding());
        
        
        this.#selectMenuItemEventBus.subscribe(headerBarView.onSelectItemMenuListener);
        this.#videoPlayerEventBus.subscribe(headerBarView.onPlayNewVideo);
    }

    #initSideBar = () => {
        const hideStyleClass = "none";
        const navMenuLineClass = "nav-menu-line";
        const navMenuHighlightItemClass = "nav-bar-item-highlight";

        const nonClickbleSectionTypes = [ this.#menuEntryTypes.introContainer ];
        
        const sectionFactory = new MenuSectionFactory(this.#rootView, hideStyleClass, navMenuLineClass);
        const itemFactory = new MenuItemViewFactory(this.#rootView, navMenuHighlightItemClass);
        
        const sideBar = 
            new SideBarMenuBuilder()
                .setRootView(this.#rootView)
                .setHideStyleClass(hideStyleClass)
                .setNonClickableSectionArray(nonClickbleSectionTypes)
                .setSectionFactory(sectionFactory)
                .setItemFactory(itemFactory)
                .setMenuDataEntries(this.#menuModel)
                .setOnSelectItemBus(this.#selectMenuItemEventBus)
                .build();
        
        sideBar.hideSideBar();
        sideBar.hideAllSection();
        
        this.#sessionEventBus.subscribe(sideBar.onStartSessionListener);
        this.#videoPlayerEventBus.subscribe(sideBar.onPlayNewVideoListener);
    }

    #initVideoPlayer = () => {
        // Build video source dictionary from menuModel
        const videoSourceList = {};
        Object.entries(this.#menuModel)
            .filter(entry => entry[1].hasOwnProperty('items'))
            .flatMap(key => key[1].items)
            .filter(item => item.type == this.#menuEntryTypes.video)    
            .forEach(v => videoSourceList[v.id] = v);
        
        // Create VideoPlayer using VideoPlayerBuilder
        const videoPlayerView = new VideoPlayerBuilder()
            .setRootView(this.#rootView)
            .setMenuItemTypes(this.#menuEntryTypes)
            .setSourcePlayListDictionary(videoSourceList)
            .setEventBus(this.#videoPlayerEventBus)
            .build();
        
        // Subscribe to event buses
        this.#sessionEventBus.subscribe(videoPlayerView.onStartSessionListener);
        this.#selectMenuItemEventBus.subscribe(videoPlayerView.onSelectItemMenuListener);
    }

    #initNotesBar = () => {
        const notesViewBinding = new NotesContainerBindView(this.#rootView);
        const notesView = new NotesContainerView(notesViewBinding.getBinding());
        
        this.#selectMenuItemEventBus.subscribe(notesView.onSideBarChangeItemListener);
        this.#videoPlayerEventBus.subscribe(notesView.onPlayNewVideoListener);

        notesView.hideNotesMenu();
    }

    #initFragmentController = () => {
        const fragmentViewBinding = new FrameScreenControllerBindView(this.#rootView);
        const frameController = new FrameScreenControllerView(this.#windowManager, fragmentViewBinding.getBinding(), this.#menuEntryTypes);
        
        this.#selectMenuItemEventBus.subscribe(frameController.onSelectMenuItemListener);
    }

    #initSession = () => {
        const sessionManager = new SessionManager(this.#localStore, this.#sessionEventBus, this.#menuEntryTypes);
        sessionManager.startSessionNotify();
        
        this.#selectMenuItemEventBus.subscribe(sessionManager.onSelectItemMenuListener);
        this.#videoPlayerEventBus.subscribe(sessionManager.onPlayNewVideoListener);
    }
}