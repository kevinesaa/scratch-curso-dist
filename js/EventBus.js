

class EventBus {

    #observers = new Set();

    constructor(){
        
    }


    dispatch = (args) => {
        this.#observers.forEach(value => value(args));
    }

    subscribe = (func) => {

        this.#observers.add(func);
    }

    unsubscribe = (func) => {
        
        this.#observers.delete(func);
    }

    unsubscribeAll = () => {
        this.#observers.clear();
    }
}



