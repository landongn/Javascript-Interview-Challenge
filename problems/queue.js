
/**
 * Implement a function that acts as a basic queue. 
 * this queue should have the ability to 'drain', 'add', and 'remove' items.
 * the ordering of operations should ensure that the first item added is the first one out. (FIFO)
 * 
 */

function Queue () {
    this.keys = [];
}

Queue.prototype = {
    items: {},
    add: function add (key, fn) {
        this.items[key] = fn;
        
        this.keys.push(key);
    },
    remove: function remove (key) {
        delete this.items[key];
    },
    get: function get (key) {
        return this.items[key];
    },
    drain: function drain () {
        var self = this;
        console.log(this.keys);
        this.keys.forEach(function(key) {
            self.get(key)();
            self.remove(key);
        });
    },
    getKeys: function getKeys() {
        return Object.keys(this.items);
    }
};

module.exports = Queue;

