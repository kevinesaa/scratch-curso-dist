
class NotesContainerView {

    static #DISPLAY_NONE = 'none';

    #notesMenuContainerView;
    #notesImageButton;
    #noteImageButtonClass;
    #noteContainerDisplayClass;

    constructor(binding) {
        this.#notesMenuContainerView = binding.notesSectionContainer;
        this.#notesImageButton = binding.notesImageButton;
        
        this.#noteImageButtonClass = binding.notesImageButton.style.display;
        this.#noteContainerDisplayClass = binding.notesSectionContainer.style.display;
        
        this.#notesImageButton.onclick = () => { 
            this.#onNoteImageButtonClickListner();
        }
    }

    showNotesMenu = () => {
        this.#notesMenuContainerView.style.display = this.#noteContainerDisplayClass;
    }

    hideNotesMenu = () => {
        this.#notesMenuContainerView.style.display = NotesContainerView.#DISPLAY_NONE;
    }


    hideNotesButton = () => {
        this.#notesImageButton.style.display = NotesContainerView.#DISPLAY_NONE;
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
        
        if( this.#notesMenuContainerView.style.display == NotesContainerView.#DISPLAY_NONE) 
        {
            this.showNotesMenu();
        }
        else 
        {
            this.hideNotesMenu();
        }
    }

}