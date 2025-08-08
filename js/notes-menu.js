

function onInitNotesBar() 
{
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

function hideNotesButton() 
{
    notesImageButton.style.display = hideStyleClass;
}

function showNotesButton() 
{
    notesImageButton.style.display = noteImageButtonClass;
}

function hideNotesMenu() 
{
    notesSectionContainer.style.display = hideStyleClass;
    NOTES_MENU_BUTTON_CLICK.dispatch(false);
    //todo change icon
}

function showNotesMenu() 
{
    notesSectionContainer.style.display = notesContainerDisplayStyle;
    NOTES_MENU_BUTTON_CLICK.dispatch(true); 
    //todo change icon  
}


function setNotes(notes) 
{
    cleanNotes();
    notes.forEach(element => {
        const item = document.createElement("li");
        item.innerText = element;
        notesSectionContainer.appendChild(item);
    });
}

function cleanNotes()
{
    const children = notesSectionContainer.children;
    for (let i=0; i < children.length; i++)
    {
        const child = children[i];
        notesSectionContainer.removeChild(child);
    }
}

function notesMenuOnSelectItemMenuListener(menuItem) 
{

    if(menuItem) 
    {
        if(menuItem.notes && menuItem.notes.length > 0)
        {
            setNotes(menuItem.notes);
            showNotesButton();
        }
        else 
        {
            hideNotesMenu();
            hideNotesButton();
        }
    }
}

function notesMenuOnPlayNewVideo(video) 
{
    if(video)
    {
        if(video.notes && video.notes.length > 0)
        {
            setNotes(video.notes);
            showNotesButton();
        }
        else 
        {
            hideNotesMenu();
            hideNotesButton();
        }
    }
}