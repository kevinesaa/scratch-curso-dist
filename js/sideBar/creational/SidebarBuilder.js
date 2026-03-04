class SideBarMenuBuilder {
    
    //view
    #rootView;
    #hideStyleClass;

    
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
        
        const sideBarBinding = new SideBarMenuBindView(this.#rootView);
        const sideBar = new SideBarMenuView(sideBarBinding.getBinding(), this.#hideStyleClass);
        sideBar.setEventBusOnSelectItem(this.#selectItemBus);
        
        let index = 0;
        Object.values(this.#menuEntriesItems).forEach( sectionDataEntry => {
            
            const isClickable = !this.#nonClickbleSectionTypes.includes(sectionDataEntry.type);
            const section = this.#sectionFactory.createSection(index,sectionDataEntry);
            
            section.bindDataView();
            section.allocateView();
            section.setIsClickable(isClickable);
            sideBar.addSection(section);
            sideBar.addView(section.getSectionView());

            if (index != 0) {
                const separatorView = this.#sectionFactory.createSeparatorView();
                sideBar.addView(separatorView);
            }

            sectionDataEntry.items.forEach(item => 
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
