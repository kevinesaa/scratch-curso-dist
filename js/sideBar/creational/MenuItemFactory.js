class MenuItemViewFactory {
    
    #rootView;
    #highlightItemClass;

    constructor(rootView,highlightItemClass) {
        this.#rootView = rootView;
        this.#highlightItemClass = highlightItemClass;
    }

    createItemView = (itemEntryData) => {

        const navEntry = this.#rootView.createElement("li");
        
        const binding = {
            itemView: navEntry
        };
        
        const itemViewContainer = new MenuItemView(binding, this.#highlightItemClass);
        itemViewContainer.setItemDataEntry(itemEntryData);
        
        return itemViewContainer;

    }
}