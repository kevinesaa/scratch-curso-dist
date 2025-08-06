


class ItemViewContainer {

    //view
    #rootView;
    #itemView;

    //css
    #highlightItemClass;

    //data
    #itemDataEntry;

    //settings
    #isAllocate = false;

    #onItemClickListener;

    constructor(rootView) {
        this.#rootView = rootView;
    }

    setItemView = (view) => {
        this.#itemView = view;
    }

    getItemView = () => {
        return this.#itemView;
    }

    setItemDataEntry = (itemData) => {
        this.#itemDataEntry = itemData;
    }

    setHighlightItemClass = (cssClass) => {
        this.#highlightItemClass = cssClass;
    }

    getItemDataEntry = () => {
        return this.#itemDataEntry;
    }
    
    allocateView = () => {
        
        if(!this.#isAllocate) {
            const thisViewContainer = this;
            this.#itemView.onclick = () => {
                
                if(this.#onItemClickListener != null && this.#onItemClickListener != undefined) {
                    this.#onItemClickListener(thisViewContainer);
                }
                
                
            }
            this.#isAllocate = true;
        }
    }

    bindDataView = () => {
        this.#itemView.id = this.#itemDataEntry.id;
        this.#itemView.innerText = this.#itemDataEntry.title;
    }

    setOnItemClickListener = (callbackListener) => {
        this.#onItemClickListener = callbackListener;
    }

    highlightItem = () => {
        this.#itemView.classList.add(this.#highlightItemClass);
    }

    unhighlightItem = () => {
        this.#itemView.classList.remove(this.#highlightItemClass);
    }
}

class ItemViewFactory {
    
    #rootView;
    #highlightItemClass;

    constructor(rootView,highlightItemClass) {
        this.#rootView = rootView;
        this.#highlightItemClass = highlightItemClass;
    }

    createItemView = (itemEntryData) => {

        const navEntry = this.#rootView.createElement("li");
        const itemViewContainer = new ItemViewContainer(this.#rootView);
        itemViewContainer.setItemView(navEntry);
        itemViewContainer.setItemDataEntry(itemEntryData);
        itemViewContainer.setHighlightItemClass(this.#highlightItemClass);
        
        return itemViewContainer;

    }
}


class SectionViewContainer {
    
    //view
    #rootView;
    #sectionView;
    #sectionListView;
    #titleTextView;

    //css class
    #hideStyleClass;
    #displaySectionClass;

    //data
    #sectionIndex;
    #sectionEntry;

    //
    #isAllocate = false;
    #isClickable = false;

    constructor(index,rootView) {
        this.#sectionIndex = index;
        this.#rootView = rootView;
    }

    setSectionView = (view) => {
        this.#sectionView = view;
    }

    setHideStyleClass = (hideStyleClass) => {
        this.#hideStyleClass = hideStyleClass;
    }

    getSectionView = () => {
        return this.#sectionView;
    }

    setSectionListView = (view) => {
        this.#sectionListView = view;
    }

    getSecctionListView = () => {
        return this.#sectionListView;
    }

    setTitleTextView = (view) => {
        this.#titleTextView = view;
    }

    setDisplaySectionClass = (displayClass) => {
        this.#displaySectionClass = displayClass;
    }

    setIsClickable = (isClickable) => {
        this.#isClickable = isClickable;
    }

    isClickable = () => {
        return this.#isClickable;
    }

    getSectionIndex = () => {
        return this.#sectionIndex;
    }

    setSectionDataEntry = (sectionEntry) => {
        this.#sectionEntry = sectionEntry;
    }

    getSectionDataEntry = () => {
        return this.#sectionEntry;
    }

    allocateView = () => {
        
        if(!this.#isAllocate) {
            
            this.#titleTextView.onclick = () => {
                if(this.#isClickable) {
                    this.onSectionClick();
                }
            };

            this.#sectionView.appendChild(this.#titleTextView);
            this.#sectionView.appendChild(this.#sectionListView);
            
            this.#isAllocate = true;
        }
    }

    bindDataView = () => {
        this.#sectionListView.id = this.#sectionEntry.id;
        this.#titleTextView.innerText = this.#sectionEntry.title;
    }

    showSection = () => {
        
        const section = this.#sectionListView; 
        const viewSection = this.#displaySectionClass;
        section.style.display = viewSection;
    }

    hideSection = () => {
        
        const hideStyleClass = this.#hideStyleClass;
        const section = this.#sectionListView; 
        section.style.display = hideStyleClass;
    }

    onSectionClick = () => {
        
        const hideStyleClass = this.#hideStyleClass;
        const section = this.#sectionListView; 
        if(section.style.display == hideStyleClass) 
        {
            this.showSection();   
        }
        else 
        {
            this.hideSection();
        }

    }
}

class SideBarSectionFactory {
    
    #rootView;
    #hideStyleClass;
    #separatorSectionCssClass;
    
    constructor(rootView,hideStyleClass,separatorSectionCssClass) {
        this.#rootView = rootView;
        this.#hideStyleClass = hideStyleClass;
        this.#separatorSectionCssClass = separatorSectionCssClass;
    }

    createSeparatorView = () =>  {

        const line = this.#rootView.createElement("hr");
        line.className = this.#separatorSectionCssClass;
        return line;
    }
    
    createSection = (index,sectionEntry) => {

        const rootView = this.#rootView;
        const sectionView = rootView.createElement("section");
        const sectionList = rootView.createElement("ul");    
        const sectionTitle = rootView.createElement("h4");
        const sectionListDisplay = sectionList.style.display;
        
        const section = new SectionViewContainer(index,rootView);
        section.setSectionView(sectionView);
        section.setSectionListView(sectionList);
        section.setTitleTextView(sectionTitle);
        section.setDisplaySectionClass(sectionListDisplay);
        section.setHideStyleClass(this.#hideStyleClass);
        
        section.setSectionDataEntry(sectionEntry);
        
        return section;
    }
}



class SideBarView {
    
    //view
    #rootView;
    #hideStyleClass;
    
    #menuOpenIconView;
    #menuCloseIconView;
    #menuCloseArea;
    #menuContainerView;
    #menuContainerDisplayStyle;

    #navegationMenuView;

    
    #currentHighlightItemId = null;
    #sectionViewContainerDict = {};
    #itemViewContainerDict = {};

    // bus
    #onSelectItemEventBus;
    
    constructor(rootView,hideStyleClass) {
        this.#rootView = rootView;
        this.#hideStyleClass = hideStyleClass;
    }

    setMenuContainderView = (view) => {
        this.#menuContainerView = view;
    }
    
    setContainderDisplayStyle = (style) => {
        this.#menuContainerDisplayStyle = style;
    }

    setOpenIconView = (view) => {
        this.#menuOpenIconView = view;
        this.#menuOpenIconView.onclick = () => {
            this.showSideBar();
        }
    }

    setCloseIconView = (view) => {
        this.#menuCloseIconView = view;
        this.#menuCloseIconView.onclick = () => {
            this.hideSideBar();
        };
    }

    setCloseMenuAreaView = (view) => {
        this.#menuCloseArea = view;
        this.#menuCloseArea.onclick = () => {
            this.hideSideBar();
        };
    }

    setNavegationMenuView = (view) => {
        this.#navegationMenuView = view;
    }

    setEventBusOnSelectItem = (eventBus)=> {
        this.#onSelectItemEventBus = eventBus;
    }

    addSection = (section) => {
        const data = section.getSectionDataEntry();
        this.#sectionViewContainerDict[data.id] = section;
    }

    addItem = (item) => {
        const data = item.getItemDataEntry();
        this.#itemViewContainerDict[data.id] = item;
        item.setOnItemClickListener(this.#onItemClickListener);
    }

    addOnItemClickListener = (callbackListener) => {
        this.#onSelectItemEventBus.subscribe(callbackListener);
    }

    showSideBar = () => {
       this.#menuContainerView.style.display = this.#menuContainerDisplayStyle;
    }

    hideSideBar = () => {
        this.#menuContainerView.style.display = this.#hideStyleClass;
    }

    showSection = (sectionId) => {
        const section =this.#sectionViewContainerDict[sectionId];
        if(section != null) {
            section.showSection(); 
        }
    }

    hideSection = (sectionId) => {
        const section = this.#sectionViewContainerDict[sectionId];
        if(section != null && section.isClickable() ) {
            section.hideSection(); 
        }
    }

    hideAllSection = () => {
        Object.values(this.#sectionViewContainerDict)
            .forEach( section => {
                if(section.isClickable()) {
                    section.hideSection();
                }    
        })
    }

    #onItemClickListener = (itemContainerView) => {
        
        itemContainerView.highlightItem();
        if(this.#currentHighlightItemId != null) {
            const currentItem = this.#itemViewContainerDict[this.#currentHighlightItemId];
            currentItem.unhighlightItem();
        }

        const dataEntry = itemContainerView.getItemDataEntry();
        this.#currentHighlightItemId = dataEntry.id;
        
        if(this.#onSelectItemEventBus != null) {
            this.#onSelectItemEventBus.dispatch(dataEntry);
        }

        this.hideSideBar();
    }

    onStartSessionListener = (session) => {
        
        if(session && session.menuItemId)
        {
            const sessionItem = this.#itemViewContainerDict[session.menuItemId];
            this.#onItemClickListener(sessionItem)
        }
    }

    onPlayNewVideoListener = (video) => {
        
        if(video && video.menuItemId)
        {
            this.#onItemClickListener(video)
        }
    }
    
}

class SideBarBuilder {
    
    //view
    #rootView;
    #hideStyleClass;

    #menuOpenIconView;
    #menuCloseIconView;
    #menuCloseAreaView;
    #menuContainerView;
    #menuContainerDisplayStyle

    #navegationMenuView;

    
    // section settings
    #nonClickbleSectionTypes;
    #sectionFactory;

    //item settings
    #itemFactory;
    #selectItemBus;

    // data
    #menuEntriesItems = {};
    
    constructor() {

    }

    setRootView = (rootView) => {
        this.#rootView = rootView;
        return this;
    }

    setHideStyleClass = (hideStyleClass) => {
        this.#hideStyleClass = hideStyleClass;
        return this;
    }
    
    setOpenIconView = (view) => {
        this.#menuOpenIconView = view;
        return this;
    }

    setCloseIconView = (view) => {
        this.#menuCloseIconView = view;
        return this;
    }
    
    setCloseMenuAreaView = (view) => {
        this.#menuCloseAreaView = view;
        return this;
    }

    setMenuContainderView = (view) => {
        this.#menuContainerView = view;
        return this;
    }

    setMenuContainerDisplayStyle = (style) => {
        this.#menuContainerDisplayStyle = style;
        return this;
    }

    setNavegationMenuView = (view) => {
        this.#navegationMenuView = view;
        return this;
    }

    setNonClickableSectionArray = (sectionTypes) => {
        this.#nonClickbleSectionTypes = sectionTypes;
        return this;
    }

    setSectionFactory = (sectionFactory) => {
        this.#sectionFactory = sectionFactory;
        return this;
    }

    setItemFactory = (itemFactory) => {
        this.#itemFactory = itemFactory;
        return this;
    }

    setMenuDataEntries = (menuDataEntries) => {
        this.#menuEntriesItems = menuDataEntries;
        return this;
    }

    setOnSelectItemBus = (bus) => {
        this.#selectItemBus = bus;
        return this;
    }

    build = () => { 
        
        const sideBar = new SideBarView(this.#rootView, this.#hideStyleClass);
        sideBar.setOpenIconView(this.#menuOpenIconView);
        sideBar.setCloseIconView(this.#menuCloseIconView);
        sideBar.setCloseMenuAreaView(this.#menuCloseAreaView);
        sideBar.setMenuContainderView(this.#menuContainerView);
        sideBar.setContainderDisplayStyle(this.#menuContainerDisplayStyle);
        sideBar.setNavegationMenuView(this.#navegationMenuView);
        sideBar.setEventBusOnSelectItem(this.#selectItemBus);
        
        let index = 0;
        Object.values(this.#menuEntriesItems).forEach( sectionEntry => {
            
            const isClickable = !this.#nonClickbleSectionTypes.includes(sectionEntry.type);
            const section = this.#sectionFactory.createSection(index,sectionEntry);
            
            this.#navegationMenuView.appendChild( section.getSectionView() );
            section.bindDataView();
            section.allocateView();
            section.setIsClickable(isClickable);
            
            sideBar.addSection(section);
            
            if (index != 0) {
                const separatorView = this.#sectionFactory.createSeparatorView();
                this.#navegationMenuView.appendChild(separatorView);
            }

            sectionEntry.items.forEach(item => 
            { 
                const itemViewContainer = this.#itemFactory.createItemView(item);
                const sectiontView = section.getSecctionListView();
                sectiontView.appendChild(itemViewContainer.getItemView());
                itemViewContainer.bindDataView();
                itemViewContainer.allocateView();
                
                sideBar.addItem(itemViewContainer);
            });
            
            index++;
        });
        
        return sideBar;
    }


}

function onInitSideBar() 
{   
    const nonClickbleSectionTypes = [ menuOptionEntryTypes.introContainer ];
    const nav = document.getElementById(navMenuId);
    const sectionFactory = new SideBarSectionFactory(document, hideStyleClass, navMenuLineClass);
    const itemFactory = new ItemViewFactory(document,navMenuHighlightItemClass);
    
    const sideBar = 
        new SideBarBuilder()
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

