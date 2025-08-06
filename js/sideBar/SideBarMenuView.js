class SideBarMenuView {
    
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
