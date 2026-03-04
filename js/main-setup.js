



function main() 
{
    const hideStyleClass = "none";
    const navMenuLineClass = "nav-menu-line";
    const navMenuHighlightItemClass = "nav-bar-item-highlight";
    const navMenuHighlightSectionClass = "nav-bar-section-highlight";

    const VIDEO_PLAYER_EVENT_BUS = new EventBus(new Set());
    const START_SESSION_EVENT_BUS = new EventBus(new Set());
    const SELECT_MENU_ITEM_EVENT_BUS = new EventBus(new Set());
    
    const app = new Application();
    app.setMenuModel(MENU);
    app.setMenuEntryTypes(menuOptionEntryTypes);
    app.setHideStyleCssClass(hideStyleClass);
    app.setSeparatorSectionCssClass(navMenuLineClass);
    app.setHighlightItemCssClass(navMenuHighlightItemClass);
    app.setHighlightSectionCssClass(navMenuHighlightSectionClass);
    app.setRootView(document);
    app.setWindowManager(window);
    app.setLocalStore(localStorage);
    app.setVideoPlayerEventBus(VIDEO_PLAYER_EVENT_BUS);
    app.setSelectMenuItemEventBus(SELECT_MENU_ITEM_EVENT_BUS);
    app.setSessionEventBus(START_SESSION_EVENT_BUS);
    
    app.init();
}



window.addEventListener("load",  main);