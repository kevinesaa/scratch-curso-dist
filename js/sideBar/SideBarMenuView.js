class SideBarMenuView {
    
    static #DISPLAY_NONE = 'none';
    //view
    #hideStyleClass;
    
    
    #menuContainerView;
    #menuContainerDisplayStyle;

    #navegationMenuView;

    
    #currentHighlightItemId = null;
    #sectionViewContainerDict = {};
    #itemViewContainerDict = {};

    // bus
    #onSelectItemEventBus;
    
    constructor(binding, hideStyleClass) {
        
        this.#hideStyleClass = hideStyleClass;
        
        binding.menuOpenIcon.onclick = () => {
            this.showSideBar();
        };

        binding.menuCloseIcon.onclick = () => {
            this.hideSideBar();
        };

        binding.menuCloseArea.onclick = () => {
            this.hideSideBar();
        };
        

        this.#menuContainerView = binding.menuContainer;
        this.#navegationMenuView = binding.navMenuView;
        
        this.#menuContainerDisplayStyle = binding.menuContainer.style.display;
    }

    setEventBusOnSelectItem = (eventBus)=> {
        this.#onSelectItemEventBus = eventBus;
    }

    addView = (view) => {
        this.#navegationMenuView.appendChild(view);
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

    subscribeOnItemClickListener = (callbackListener) => {
        this.#onSelectItemEventBus.subscribe(callbackListener);
    }

    unsubscribeOnItemClickListener = (callbackListener) => {
        this.#onSelectItemEventBus.unsubscribe(callbackListener);
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
