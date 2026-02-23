
const VIDEO_PLAYER_EVENT_BUS = new EventBus(new Set());
const START_SESSION_EVENT_BUS = new EventBus(new Set());
const SELECT_MENU_ITEM_EVENT_BUS = new EventBus(new Set());


const ALL_EVENT_BUSES = Object.freeze({
    VIDEO_PLAYER_EVENT_BUS,
    START_SESSION_EVENT_BUS,
    SELECT_MENU_ITEM_EVENT_BUS
});

function onInitHeader() 
{
    
    const headerTitle = document.getElementById("header-title");
    const browserTitle = document.getElementById("browser-title"); 
    
    const headerBarView = new HeaderBarView({
        headerTitleView:headerTitle,
        browserTitleView:browserTitle
    });
    
    
    SELECT_MENU_ITEM_EVENT_BUS.subscribe(headerBarView.onSelectItemMenuListener);
    VIDEO_PLAYER_EVENT_BUS.subscribe(headerBarView.onPlayNewVideo);
}


function onInitSideBar() 
{   
    const nonClickbleSectionTypes = [ menuOptionEntryTypes.introContainer ];
    const nav = document.getElementById(navMenuId);
    const sectionFactory = new MenuSectionFactory(document, hideStyleClass, navMenuLineClass);
    const itemFactory = new MenuItemViewFactory(document,navMenuHighlightItemClass);
    
    const sideBar = 
        new SideBarMenuBuilder()
            .setRootView(document)
            .setHideStyleClass(hideStyleClass)
            .setMenuContainderView(menuContainer)
            .setCloseIconView(menuCloseIcon)
            .setCloseMenuAreaView(menuCloseArea)
            .setOpenIconView(menuOpenIcon)
            .setMenuContainerDisplayStyle(menuContainerDisplayStyle)
            .setNavegationMenuView(nav)
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
    
    const playListController = new PlayListController(videoSourceList)
    const videoPlayerView = new VideoPlayerView(VIDEO_PLAYER_EVENT_BUS,playListController);
    
    
}

function onInitNotesBar() 
{
    const notesView = new NotesContainerView();
    notesView.setNotesContainerView(notesSectionContainer);
    notesView.setImageButtonView(notesImageButton);
    notesView.setHideStyleClass(hideStyleClass)
    notesView.setImageButtonDisplayStyleClass(noteImageButtonClass);
    notesView.setNoteMenuDisplayStyleClass(notesContainerDisplayStyle)
    SELECT_MENU_ITEM_EVENT_BUS.subscribe(notesView.onSideBarChangeItemListener);
    VIDEO_PLAYER_EVENT_BUS.subscribe(notesView.onPlayNewVideoListener);

    notesView.hideNotesMenu();
}


function onInitFragmentController() 
{

    const frameController = new FrameScreenController(menuOptionEntryTypes,window);
    frameController.setHideStyleClass(hideStyleClass);
    frameController.setInternalContainerPageView(internalPageContainer);
    frameController.setInternalPageView(internalPageDisplay);
    frameController.setInternalPageCssDisplayClass(internalPageContainerDisplayClass);
    frameController.setVideoContainerPageView(videoFragmentContainer);
    frameController.setVideoContainerCssDisplayClass(internalPageContainerDisplayClass);

    SELECT_MENU_ITEM_EVENT_BUS.subscribe(frameController.onSelectMenuItemListener);
}

function onInitSession() 
{
    const sessionManager = new SessionManager(localStorage,START_SESSION_EVENT_BUS,menuOptionEntryTypes);
    sessionManager.startSessionNotify();
    
    SELECT_MENU_ITEM_EVENT_BUS.subscribe(sessionManager.onSelectItemMenuListener);
    VIDEO_PLAYER_EVENT_BUS.subscribe(sessionManager.onPlayNewVideoListener);
}

class Main {


    constructor() {

    }
}


function main() 
{
    //ALL_VIEW_CONTAINER
    //{MENU, ALL_EVENT_BUSES}
    onInitHeader();
    onInitSideBar();
    onInitVideoPlayer();
    // ======================= /
    //old_onInitVideoPlayer();
    // ======================= /
    onInitNotesBar();
    onInitFragmentController();
    onInitSession();
}

window.addEventListener("load",  main);