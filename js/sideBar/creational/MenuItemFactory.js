class MenuItemViewFactory {
    
    #rootView;
    #highlightItemClass;

    constructor(rootView,highlightItemClass) {
        this.#rootView = rootView;
        this.#highlightItemClass = highlightItemClass;
    }

    createItemView = (itemEntryData) => {

        const navEntry = this.#rootView.createElement("li");
        const itemViewContainer = new MenuItemView(this.#rootView);
        itemViewContainer.setItemView(navEntry);
        itemViewContainer.setItemDataEntry(itemEntryData);
        itemViewContainer.setHighlightItemClass(this.#highlightItemClass);
        
        return itemViewContainer;

    }
}