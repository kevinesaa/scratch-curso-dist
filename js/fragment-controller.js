
const fragmentLayouts = {};
function onInitFragmentController() 
{
    initLayoutFunctions();
    Object.freeze(fragmentLayouts);
    SIDE_BAR_SESSION_EVENT_BUS.subscribe(fragmentControllerOnSelectMenuItem);
    SELECT_MENU_ITEM_EVENT_BUS.subscribe(fragmentControllerOnSelectMenuItem);
    NOTES_MENU_BUTTON_CLICK.subscribe(fragmentControllerOnNotesClickButton);
}

function fragmentControllerOnNotesClickButton(showNotes)
{
    if(showNotes)
    {
        //todo
        /** 
         video-screen-fragment-container
         video-section
         notes-section
        */
    }
    else
    {
        //todo
    }
}

function fragmentControllerOnSelectMenuItem(item)
{
    if(item.type)
    {
        const func = fragmentLayouts[item.type];
        if(func)
        {
            func(item);
        }
    }
}

function initLayoutFunctions() 
{
    fragmentLayouts[menuOptionEntryTypes.video] = videoLayout;
    fragmentLayouts[menuOptionEntryTypes.internalPage] = internalPageLayout;
    fragmentLayouts[menuOptionEntryTypes.externalLink] = externalPage;
}

function videoLayout(item)
{

    internalPageContainer.style.display = hideStyleClass;
    videoFragmentContainer.style.display = videoFragmentContainerDisplayClass;
    if(item.notes && item.notes.length > 0)
    {
        //todo
    }
    else
    {
        //todo
    }
}

function internalPageLayout(item)
{
    videoFragmentContainer.style.display = hideStyleClass;
    internalPageContainer.style.display = internalPageContainerDisplayClass;
    internalPageDisplay.data = item.uri;
}

function externalPage(item)
{
    window.open(item.uri, '_blank');
}


function openNotesLayout() 
{

}