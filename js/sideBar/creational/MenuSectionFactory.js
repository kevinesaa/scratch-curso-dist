
class MenuSectionFactory {
    
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
        
        const binding = {
            sectionView: sectionView,
            sectionListView: sectionList,
            titleTextView: sectionTitle,
            displaySectionClass: sectionListDisplay
        };
        
        const section = new MenuSectionView(index, binding, this.#hideStyleClass);
        
        section.setSectionDataEntry(sectionEntry);
        
        return section;
    }
}
