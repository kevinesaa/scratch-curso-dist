
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