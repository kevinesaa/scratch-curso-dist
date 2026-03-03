



function main() 
{
    const VIDEO_PLAYER_EVENT_BUS = new EventBus(new Set());
    const START_SESSION_EVENT_BUS = new EventBus(new Set());
    const SELECT_MENU_ITEM_EVENT_BUS = new EventBus(new Set());
    
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
}



window.addEventListener("load",  main);