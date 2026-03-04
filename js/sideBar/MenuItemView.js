
class MenuItemView {

    //view
    #itemView;

    //css
    #highlightItemClass;

    //data
    #itemDataEntry;

    //settings
    #isAllocate = false;

    #onItemClickListener;

    constructor(binding, highlightItemClass) {
        this.#itemView = binding.itemView;
        this.#highlightItemClass = highlightItemClass;
    }

    getItemView = () => {
        return this.#itemView;
    }

    setItemDataEntry = (itemData) => {
        this.#itemDataEntry = itemData;
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