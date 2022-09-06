

function onInitNotesBar() 
{
    SIDE_BAR_SESSION_EVENT_BUS.subscribe(notesMenuOnSelectItemMenuListener);
    SELECT_MENU_ITEM_EVENT_BUS.subscribe(notesMenuOnSelectItemMenuListener);
    VIDEO_PLAYER_EVENT_BUS.subscribe(notesMenuOnPlayNewVideo);
    notesImageButton.onclick = () => 
    {
        if(notesSectionContainer.style.display == hideStyleClass) 
        {
            showNotesMenu();
        }
        else 
        {
            hideNotesMenu();
        }
    }
    hideNotesMenu();
}

function hideNotesMenu() 
{
    notesSectionContainer.style.display = hideStyleClass;
}

function showNotesMenu() 
{
    notesSectionContainer.style.display = notesContainerDisplayStyle;   
}


function setNotes(notes) 
{
    
}

function notesMenuOnSelectItemMenuListener(menuItem) 
{

    if(menuItem && menuItem.notes) 
    {
        setNotes(menuItem.notes);
    }
}

function notesMenuOnPlayNewVideo(video) 
{
    if(video && video.notes)
    {
        setNotes(video.notes);
    }
}