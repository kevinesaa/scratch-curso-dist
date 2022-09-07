
const fragmentLayouts = {};
function onInitFragmentController() 
{
    initLayoutFunctions();
    Object.freeze(fragmentLayouts);
    SIDE_BAR_SESSION_EVENT_BUS.subscribe(fragmentControllerOnSelectMenuItem);
    SELECT_MENU_ITEM_EVENT_BUS.subscribe(fragmentControllerOnSelectMenuItem);
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
