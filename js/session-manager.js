
const APP_NAME = "SCRATCH_LOCAL_A_PROGRAMAR";
const CURRENT_MENU_ITEM_KEY = APP_NAME + "_MENU_ITEM_KEY";
const CURRENT_VIDEO_KEY = APP_NAME + "_CURRENT_VIDEO_KEY";

function onInitSession() 
{
    const session = setupSessionObject();
    START_SESSION_EVENT_BUS.dispatch(session);
    SELECT_MENU_ITEM_EVENT_BUS.subscribe(sessionManagerOnSelectItemMenuListener);
    VIDEO_PLAYER_EVENT_BUS.subscribe(sessionManagerBarOnPlayNewVideo);
}

function setupSessionObject()
{
    const menuItemId = localStorage.getItem(CURRENT_MENU_ITEM_KEY);
    const videoId = localStorage.getItem(CURRENT_VIDEO_KEY);
    return { menuItemId, videoId};
}

function sessionManagerOnSelectItemMenuListener(menuItem)
{
    if(menuItem.type && menuItem.type != menuOptionEntryTypes.externalLink)
    {
        saveCurrentMenuId(menuItem.id);
    }
    
    if(menuItem.type == menuOptionEntryTypes.video) 
    {
        saveCurrentVideoId(menuItem.id);
    }
}

function sessionManagerBarOnPlayNewVideo(video) 
{
    if(video.type == menuOptionEntryTypes.video) 
    {
        saveCurrentVideoId(video.id);
    }
}

function saveCurrentMenuId(menuId)
{
    localStorage.setItem(CURRENT_MENU_ITEM_KEY, menuId);
}

function saveCurrentVideoId(videoId)
{
    localStorage.setItem(CURRENT_VIDEO_KEY, videoId);
}

