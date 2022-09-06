

function onInitHeader() 
{
    SIDE_BAR_SESSION_EVENT_BUS.subscribe(headerBarOnSelectItemMenuListener);
    SELECT_MENU_ITEM_EVENT_BUS.subscribe(headerBarOnSelectItemMenuListener);
    VIDEO_PLAYER_EVENT_BUS.subscribe(headerBarOnPlayNewVideo);
}

function setTitle(title) 
{
    headerTitle.innerText = title;
    broserTitle.innerText = title;
}

function headerBarOnSelectItemMenuListener(menuItem) 
{
    if(menuItem) 
    {
        setTitle(menuItem.title);
    }
}

function headerBarOnPlayNewVideo(video) 
{
    if(video) 
    {
        setTitle(video.title);
    }
}