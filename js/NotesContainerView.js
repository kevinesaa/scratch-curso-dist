
class NotesContainerView {

    #notesMenuContainerView;
    #notesImageButton;
    #hideStyleClass;
    #noteImageButtonClass;
    #noteContainerDisplayClass;

    constructor() {
        
    }

    setNotesContainerView = (view) => {
        this.#notesMenuContainerView = view;
    }

    setImageButtonView = (view) => {
        
        this.#notesImageButton = view;
        this.#notesImageButton.onclick = () => { 
            
            this.#onNoteImageButtonClickListner();
        }
    }

    setHideStyleClass = (cssClass) => {
        this.#hideStyleClass = cssClass;
    }

    setImageButtonDisplayStyleClass = (cssClass) => {
        this.#noteImageButtonClass = cssClass;
    }

    setNoteMenuDisplayStyleClass = (cssClass) => {
        this.#noteContainerDisplayClass = cssClass;
    }

    showNotesMenu = () => {
        this.#notesMenuContainerView.style.display = this.#noteContainerDisplayClass;
        // todo change image button icon
        // notesImageButton
    }

    hideNotesMenu = () => {
        this.#notesMenuContainerView.style.display = this.#hideStyleClass;
        // todo change image button icon
        // notesImageButton
    }


    hideNotesButton = () => {
        this.#notesImageButton.style.display = this.#hideStyleClass;
    }

    showNotesButton = () => {
        this.#notesImageButton.style.display = this.#noteImageButtonClass;
    }

    cleanNotes = () =>{

        const children = this.#notesMenuContainerView.children;
        for (let i=0; i < children.length; i++)
        {
            const child = children[i];
            this.#notesMenuContainerView.removeChild(child);
        }
    }

    setNotes = (notes) => {

        this.cleanNotes();
        notes.forEach(element => {
            const item = document.createElement("li");
            item.innerText = element;
            this.#notesMenuContainerView.appendChild(item);
        });
    }

    onSideBarChangeItemListener = (itemMenu) => {
        
        if(itemMenu) 
        {
            if(itemMenu.notes && itemMenu.notes.length > 0)
            {
                this.setNotes(itemMenu.notes);
                this.showNotesButton();
            }
            else 
            {
                this.hideNotesMenu();
                this.hideNotesButton();
            }
        }
    }

    onPlayNewVideoListener = (videoMenu) => {

        if(videoMenu)
        {
            if(videoMenu.notes && videoMenu.notes.length > 0)
            {
                this.setNotes(videoMenu.notes);
                this.showNotesButton();
            }
            else 
            {
                this.hideNotesMenu();
                this.hideNotesButton();
            }
        }
    }

    #onNoteImageButtonClickListner = () => {
        
        if( this.#notesMenuContainerView.style.display == hideStyleClass) 
        {
            this.showNotesMenu();
        }
        else 
        {
            this.hideNotesMenu();
        }
    }

}