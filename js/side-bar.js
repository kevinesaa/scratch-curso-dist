
let currentHighlightItem = null;
const sectionDisplayClass = {};
const entries = {};

function onInitSideBar() 
{   
    menuCloseIcon.onclick = hideMenu;
    menuOpenIcon.onclick = showMenu;
    menuCloseArea.onclick = hideMenu;
    const nav = document.getElementById(navMenuId);
    let index = 0;
    Object.values(MENU).forEach(u => { 

        const section = createSection(u);
        if(index != 0) {
            const line = document.createElement("hr");
            line.className = navMenuLineClass;
            nav.appendChild(line);
        }
        
        nav.appendChild(section);
        index++;
    });
    
    Object.freeze(sectionDisplayClass);
    Object.freeze(entries);
    START_SESSION_EVENT_BUS.subscribe(sideBarOnStartSession);
    VIDEO_PLAYER_EVENT_BUS.subscribe(sideBarOnPlayNewVideo);
    hideMenu();
}

function sideBarOnStartSession(session) 
{
    if(session && session.menuItemId)
    {
        const e = entries[session.menuItemId];
        selectItem(e);
        SIDE_BAR_SESSION_EVENT_BUS.dispatch(e);
    }
}

function sideBarOnPlayNewVideo(video) 
{
    if(video) 
    {
        selectItem(video);
    }
}

function selectItem(item) 
{
    hideAllSection();
    showSection(item.parent_id);
    highlightItem(item.id);
    hideMenu();
}

function highlightItem(itemId) 
{
    if(currentHighlightItem) 
    {
        currentHighlightItem.classList.remove(navMenuHighlightItemClass);
    }
    currentHighlightItem = document.getElementById(itemId);
    currentHighlightItem.classList.add(navMenuHighlightItemClass);
}

function hideMenu() 
{
    menuContainer.style.display = hideStyleClass;
}

function showMenu() 
{
    menuContainer.style.display = menuContainerDisplayStyle;
}

function hideAllSection() 
{
    Object.keys(sectionDisplayClass)
        .forEach(section => hideSection(section));
}

function onSectionClick(sectionId) 
{
    const section = document.getElementById(sectionId);
    if(section.style.display == hideStyleClass) 
    {
        showSection(sectionId);   
    }
    else 
    {
        hideSection(sectionId);
    }
}

function hideSection(sectionId) 
{
    const section = document.getElementById(sectionId);
    section.style.display = hideStyleClass;
}

function showSection(sectionId) 
{
    const section = document.getElementById(sectionId);
    section.style.display = sectionDisplayClass[sectionId];
}

function createSection(data) 
{
    
    const section = document.createElement("section");
    const sectionList = document.createElement("ul");    
    const sectionTitle = document.createElement("h4");
    const sectionListDisplay = sectionList.style.display;
    sectionList.id = data.id;
    sectionTitle.innerText = data.title;
    section.appendChild(sectionTitle);
    section.appendChild(sectionList);

    if(data.type != menuOptionEntryTypes.introContainer) 
    {
        sectionDisplayClass[sectionList.id] = sectionListDisplay;
        sectionList.style.display = hideStyleClass;
        sectionTitle.onclick = () => 
        {
            onSectionClick(sectionList.id);
        };
    }
    
    data.items.forEach(item => 
    { 
        entries[item.id] = item;
        const navEntry = createEntry(item);
        sectionList.appendChild(navEntry);
    });
    
    
    return section;
}

function createEntry(itemData) 
{
    const navEntry = document.createElement("li");
    navEntry.innerText = itemData.title;
    navEntry.id = itemData.id;
    navEntry.onclick = () => {
        
        highlightItem(itemData.id);
        hideMenu();
        SELECT_MENU_ITEM_EVENT_BUS.dispatch(itemData);
    }
    return navEntry;
}
