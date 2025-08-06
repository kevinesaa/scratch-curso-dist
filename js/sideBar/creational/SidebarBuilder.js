class SideBarMenuBuilder {
    
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
        
        const sideBar = new SideBarMenuView(this.#rootView, this.#hideStyleClass);
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
