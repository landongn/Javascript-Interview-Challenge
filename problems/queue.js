
/**
 * Implement a function that acts as a basic queue. 
 * this queue should have the ability to 'drain', 'add', and 'remove' items.
 * the ordering of operations should ensure that the first item added is the first one out. (FIFO)
 * 
 */

function Queue () {
    this.queue = [];
}

/*
    q = new Queue();
    [
        {key1: fn1},
        {key2: fn2},
        {key3: fn3}
    ]
    q.drain()
        fn1()
        fn2()
        fn3()
    q.add(key, value)
        foo = {};
        foo[key] = value;
        array.push(foo)
    q.remove(key)
        find object in array where key == key
        remove from array

function Human() {}
var Landon = Object.create(Human.prototype);
Landon.prototype.constructor = Landon;
 */

// Queue.prototype = {
// };

Queue.prototype.drain = function () {
    for (var i = 0; i < this.queue.length; i++) {
        for(var key in this.queue[i]) {
            this.queue[i][key]();
        }
    }
};

Queue.prototype.add = function (key, value) {
    var itemToAdd = {};
    itemToAdd[key] = value;
    this.queue.push(itemToAdd);
};

Queue.prototype.remove = function (key) {
    for (var i = 0; i < this.queue.length; i++) {
        if (this.queue[i][key] === key) {
            this.queue.splice(this.queue[i], 1);
        }
    }
};

module.exports = Queue;