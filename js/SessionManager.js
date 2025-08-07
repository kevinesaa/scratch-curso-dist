
class SessionManager {

    #localStoreManager;
    #startSessionEventBus;
    #menuOptionEntryTypes;

    static APP_NAME = "SCRATCH_LOCAL_A_PROGRAMAR";
    static CURRENT_MENU_ITEM_KEY = SessionManager.APP_NAME + "_MENU_ITEM_KEY";
    static CURRENT_VIDEO_KEY = SessionManager.APP_NAME + "_CURRENT_VIDEO_KEY";
    
    constructor(localStoreManager,startSessionEventBus,menuOptionEntryTypes) {

        this.#localStoreManager = localStoreManager;
        this.#startSessionEventBus = startSessionEventBus;
        this.#menuOptionEntryTypes = menuOptionEntryTypes;
    }

    subscribeOnStartSession = (func) => {

        this.#startSessionEventBus.subscribe(func)
    }

    unsubscribeOnStartSession = (func) => {

        this.#startSessionEventBus.unsubscribe(func)
    }

    startSessionNotify = () => {

        const sessionObject = this.#retrieveLastSession();
        this.#startSessionEventBus.dispatch(sessionObject);
    }

    saveCurrentMenuId = (menuId) =>{

        this.#localStoreManager.setItem(SessionManager.CURRENT_MENU_ITEM_KEY, menuId);
    }

    saveCurrentVideoId = (videoId) => {

        this.#localStoreManager.setItem(SessionManager.CURRENT_VIDEO_KEY, videoId);
    }

    onPlayNewVideoListener = (videoModel) => {

        if(videoModel.type == this.#menuOptionEntryTypes.video) 
        {
            this.saveCurrentVideoId(videoModel.id);
        }
    }

    onSelectItemMenuListener = (menuItemModel) => {
        
        if(menuItemModel.type && menuItemModel.type != this.#menuOptionEntryTypes.externalLink)
        {
            this.saveCurrentMenuId(menuItemModel.id);
        }
        
        if(menuItemModel.type == this.#menuOptionEntryTypes.video) 
        {
            this.saveCurrentVideoId(menuItemModel.id);
        }
    }

    #retrieveLastSession = () => {

        const menuItemId = this.#localStoreManager.getItem(SessionManager.CURRENT_MENU_ITEM_KEY);
        const videoId = this.#localStoreManager.getItem(SessionManager.CURRENT_VIDEO_KEY);
        const sessionObject = { menuItemId, videoId};
        return sessionObject;

    }
}

