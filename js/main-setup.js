
const VIDEO_PLAYER_EVENT_BUS = new EventBus(new Set());
const START_SESSION_EVENT_BUS = new EventBus(new Set());
const SELECT_MENU_ITEM_EVENT_BUS = new EventBus(new Set());


function onInitSideBar() 
{   

    const hideStyleClass = "none";
    const navMenuLineClass = "nav-menu-line";
    const navMenuHighlightItemClass = "nav-bar-item-highlight";
    const navMenuHighlightSectionClass = "nav-bar-section-highlight";

    const sideBarBinding = new SideBarMenuBindView(document).getBinding();
    const menuContainerDisplayStyle = sideBarBinding.menuContainer.style.display;

    const nonClickbleSectionTypes = [ menuOptionEntryTypes.introContainer ];
    
    const sectionFactory = new MenuSectionFactory(document, hideStyleClass, navMenuLineClass);
    const itemFactory = new MenuItemViewFactory(document,navMenuHighlightItemClass);
    
    const sideBar = 
        new SideBarMenuBuilder()
            .setRootView(document)
            .setMenuContainderView(sideBarBinding.menuContainer)
            .setCloseIconView(sideBarBinding.menuCloseIcon)
            .setCloseMenuAreaView(sideBarBinding.menuCloseArea)
            .setOpenIconView(sideBarBinding.menuOpenIcon)
            .setNavegationMenuView(sideBarBinding.navMenuView)
            .setHideStyleClass(hideStyleClass)
            .setMenuContainerDisplayStyle(menuContainerDisplayStyle)
            .setNonClickableSectionArray(nonClickbleSectionTypes)
            .setSectionFactory(sectionFactory)
            .setItemFactory(itemFactory)
            .setMenuDataEntries(MENU)
            .setOnSelectItemBus(SELECT_MENU_ITEM_EVENT_BUS)
            .build();
    
    sideBar.hideSideBar();
    sideBar.hideAllSection();
    
    START_SESSION_EVENT_BUS.subscribe(sideBar.onStartSessionListener);
    VIDEO_PLAYER_EVENT_BUS.subscribe(sideBar.onPlayNewVideoListener);
}

function onInitVideoPlayer() 
{   
    const videoSourceList = {};
    Object.entries(MENU)
        .filter(entry => entry[1].hasOwnProperty('items'))
        .flatMap(key => key[1].items)
        .filter(item => item.type == menuOptionEntryTypes.video)    
        .forEach(v => videoSourceList[v.id] = v);
    
    
    const videoPlayerView = new VideoPlayerBuilder()
        .setRootView(document)
        .setMenuItemTypes(menuOptionEntryTypes)
        .setSourcePlayListDictionary(videoSourceList)
        .setEventBus(VIDEO_PLAYER_EVENT_BUS)
        .build();
    
    START_SESSION_EVENT_BUS.subscribe(videoPlayerView.onStartSessionListener);
    SELECT_MENU_ITEM_EVENT_BUS.subscribe(videoPlayerView.onSelectItemMenuListener);
}

function onInitNotesBar() 
{
    const notesViewBinding = new NotesContainerBindView(document);
    const notesView = new NotesContainerView(notesViewBinding.getBinding());
    
    SELECT_MENU_ITEM_EVENT_BUS.subscribe(notesView.onSideBarChangeItemListener);
    VIDEO_PLAYER_EVENT_BUS.subscribe(notesView.onPlayNewVideoListener);

    notesView.hideNotesMenu();
}


function onInitFragmentController() 
{
    const fragmentViewBinding = new FrameScreenControllerBindView(document);
    const frameController = new FrameScreenControllerView(window, fragmentViewBinding.getBinding(), menuOptionEntryTypes);
    
    SELECT_MENU_ITEM_EVENT_BUS.subscribe(frameController.onSelectMenuItemListener);
}

function onInitSession() 
{
    const sessionManager = new SessionManager(localStorage,START_SESSION_EVENT_BUS,menuOptionEntryTypes);
    sessionManager.startSessionNotify();
    
    SELECT_MENU_ITEM_EVENT_BUS.subscribe(sessionManager.onSelectItemMenuListener);
    VIDEO_PLAYER_EVENT_BUS.subscribe(sessionManager.onPlayNewVideoListener);
}

function main() 
{
    
    onInitSideBar();
    onInitVideoPlayer();
    onInitNotesBar();
    onInitFragmentController();
    

    const app = new Application();
    app.setMenuModel(MENU);
    app.setMenuEntryTypes(menuOptionEntryTypes);
    app.setRootView(document);
    app.setWindowManager(window);
    app.setLocalStore(localStorage);
    app.setVideoPlayerEventBus(VIDEO_PLAYER_EVENT_BUS);
    app.setSelectMenuItemEventBus(SELECT_MENU_ITEM_EVENT_BUS);
    app.setSessionEventBus(START_SESSION_EVENT_BUS);
    app.init();

    onInitSession();
}



window.addEventListener("load",  main);