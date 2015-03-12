var expect = require('chai').expect;
var sinon = require('sinon');
var Queue = require('../problems/queue');

describe('Queue', function () {
    it('should create an empty queue when instantiated', function () {
        var queue = new Queue();
        
        expect(queue.getKeys().length).to.equal(0);
    });
    
    it('should add an item to the queue', function () {
        var queue = new Queue();

        queue.add('first', function () {});

        expect(queue.getKeys().length).to.equal(1);
    });

    it('should remove an item from the queue', function() {
        var queue = new Queue();

        queue.add('first', function (){});
        queue.add('second', function (){});
        queue.add('third', function (){});
        queue.remove('second');

        expect(queue.getKeys().length).to.equal(2);
    });   

    it('should drain function called from queue after executed', function () {
        var queue = new Queue();

        queue.add('first', function (){
            console.log('first');
        });
        queue.add('second', function () {
            console.log('second');
        });
        queue.add('third', function () {
            console.log('third');
        });
        queue.drain();

        expect(queue.getKeys().length).to.equal(0);
    });

    // extra credit! What else could we test here?
});
