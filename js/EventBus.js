

class EventBus {

    #observers;

    constructor(listenerSetArray){
        this.#observers = listenerSetArray;
    }


    dispatch = (args) => {
        this.#observers.forEach(func => func(args));
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



