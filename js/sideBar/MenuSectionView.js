class MenuSectionView {
    
    //view
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

    constructor(index, binding, hideStyleClass) {
        
        this.#sectionIndex = index;
        this.#hideStyleClass = hideStyleClass;
        
        this.#sectionView = binding.sectionView;
        this.#sectionListView = binding.sectionListView;
        this.#titleTextView = binding.titleTextView;
        this.#displaySectionClass = binding.displaySectionClass;
    }

    getSectionView = () => {
        return this.#sectionView;
    }

    getSecctionListView = () => {
        return this.#sectionListView;
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
