
const VIDEO_PLAYER_EVENT_BUS = new EventBus(new Set());
const START_SESSION_EVENT_BUS = new EventBus(new Set());
const SIDE_BAR_SESSION_EVENT_BUS = new EventBus(new Set());
const SELECT_MENU_ITEM_EVENT_BUS = new EventBus(new Set());
const NOTES_MENU_BUTTON_CLICK = new EventBus(new Set());

const ALL_EVENT_BUSES = Object.freeze({
    VIDEO_PLAYER_EVENT_BUS,
    START_SESSION_EVENT_BUS,
    SIDE_BAR_SESSION_EVENT_BUS,
    SELECT_MENU_ITEM_EVENT_BUS,
    NOTES_MENU_BUTTON_CLICK
});

function onInitHeader() 
{
    
    const headerTitle = document.getElementById("header-title");
    const browserTitle = document.getElementById("browser-title"); 
    
    const headerBarView = new HeaderBarView({
        headerTitleView:headerTitle,
        browserTitleView:browserTitle
    });
    
    SIDE_BAR_SESSION_EVENT_BUS.subscribe(headerBarView.onSelectItemMenuListener);
    SELECT_MENU_ITEM_EVENT_BUS.subscribe(headerBarView.onSelectItemMenuListener);
    VIDEO_PLAYER_EVENT_BUS.subscribe(headerBarView.onPlayNewVideo);
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
    onInitNotesBar();
    onInitFragmentController();
    onInitSession();
}

window.addEventListener("load",  main);