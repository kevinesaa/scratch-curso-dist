class MenuSectionView {
    
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
