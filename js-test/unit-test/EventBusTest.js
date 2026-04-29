

QUnit.module('Event Bus', function() {
    
    QUnit.test('when observers is empty, return zero', function(assert) {
        const eventBus = new EventBus(new Set());
        const observersSize = eventBus.getObservers().size
        assert.strictEqual(observersSize,0);
    });

    QUnit.test('when one observer subscribe, return observers size one', function(assert) {
        const eventBus = new EventBus(new Set());
        const fakeObserver = () => {};
        eventBus.subscribe(fakeObserver);
        const observersSize = eventBus.getObservers().size
        assert.strictEqual(observersSize,1);
    });

    QUnit.test('when two observer subscribe, return observers size two', function(assert) {
        const eventBus = new EventBus(new Set());
        const fakeObserver1 = () => {};
        const fakeObserver2 = () => {};
        eventBus.subscribe(fakeObserver1);
        eventBus.subscribe(fakeObserver2);
        const observersSize = eventBus.getObservers().size
        assert.strictEqual(observersSize,2);
    });

    QUnit.test('when one observer unsubscribe, return observers size zero', function(assert) {
        const eventBus = new EventBus(new Set());
        const fakeObserver = () => {};
        eventBus.subscribe(fakeObserver);
        eventBus.unsubscribe(fakeObserver);
        const observersSize = eventBus.getObservers().size
        assert.strictEqual(observersSize,0);
    });

    QUnit.test('when one of two observer unsubscribe, return observers size one', function(assert) {
        const eventBus = new EventBus(new Set());
        const fakeObserver1 = () => {};
        const fakeObserver2 = () => {};
        eventBus.subscribe(fakeObserver1);
        eventBus.subscribe(fakeObserver2);
        eventBus.unsubscribe(fakeObserver1);
        const observersSize = eventBus.getObservers().size
        assert.strictEqual(observersSize,1);
    });

    QUnit.test('when unsubscribe all, return zero',function(assert) {
        const eventBus = new EventBus(new Set());
        const fakeObserver1 = () => {};
        const fakeObserver2 = () => {};
        eventBus.subscribe(fakeObserver1);
        eventBus.subscribe(fakeObserver2);
        eventBus.unsubscribeAll();
        const observersSize = eventBus.getObservers().size
        assert.strictEqual(observersSize,0);
    });

});