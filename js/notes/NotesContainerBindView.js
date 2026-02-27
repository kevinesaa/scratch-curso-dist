class NotesContainerBindView {

    #binding = {};
    
    getBinding = () => {
        return this.#binding;
    }

    constructor(rootView) {
        this.#binding.notesImageButton = rootView.getElementById("notes-menu-icon");
        this.#binding.notesSectionContainer = rootView.getElementById("notes-section");
    }
}