
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
