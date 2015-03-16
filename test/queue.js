var expect = require('chai').expect;
var sinon = require('sinon');
var Queue = require('../problems/queue');

describe('Queue', function () {

    describe('Operations', function () {

        var q;

        beforeEach(function () {
            q = new Queue();

            q.add("foo", function bar(){});
        });

        it('should maintain a series of functions', function () {
            q.add("key1", sinon.spy());
            q.add("key2", sinon.spy());
            expect(2).to.equal(q.queue.length);
        });

        it('should allow you to add a function to the queue', function () {
            // q.add is defined
            // q.add("key1", sinon.spy());
            // expect(typeof q.queue[0]["key1"]).to.equal("function");
        });

        it('should ensure that removed functions are eliminated from the queue', function () {
            q.add("key1", sinon.spy());
            q.add("key2", sinon.spy());
            q.remove("key1");
            expect(1).to.equal(q.queue.length);
            // expect(this.queue[1]["key2"]).to.equal(undefined);
        });

        it('should execute a function every 1000 milliseconds while items are queued', function (done) {
            done();
        });

    });

    describe('Bookeeping', function () {

    });

    // extra credit! What else could we test here?
});