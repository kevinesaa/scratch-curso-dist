

class EventBus {

    #observers = new Set();

    constructor(){}


    dispatch(args) {
        this.#observers.forEach(value => value(args));
    }

    subscribe(func) {

        this.#observers.add(func);
    }

    unsubscribe(func) {
        
        this.#observers.delete(func);
    }

    unsubscribeAll() {
        this.#observers.clear();
    }
}

const VIDEO_PLAYER_EVENT_BUS = new EventBus();
const START_SESSION_EVENT_BUS = new EventBus();
const SIDE_BAR_SESSION_EVENT_BUS = new EventBus();
const SELECT_MENU_ITEM_EVENT_BUS = new EventBus();

const ALL_EVENT_BUSES = Object.freeze({
    VIDEO_PLAYER_EVENT_BUS,
    START_SESSION_EVENT_BUS,
    SIDE_BAR_SESSION_EVENT_BUS,
    SELECT_MENU_ITEM_EVENT_BUS
});

