var expect = require('chai').expect;
var sinon = require('sinon');
var debounce = require('../problems/debounce');

describe('Debounce', function () {
    it('should work with a single input', function (done) {
        var cb = sinon.spy();
        debounce(cb, 350, false);
        setTimeout(function () {
            expect(cb.called).to.equal(true);
            done();
        }, 400);
    });

    it('should only execute once on multiple calls', function (done) {
        var cb = sinon.spy();
        debounce(cb, 350, false);
        debounce(cb, 350, false);
        setTimeout(function () {
            expect(cb.called).to.equal(true);
            expect(cb.calledOnce).to.equal(true);
            done();
        }, 400); 
    });

    it('should execute immediately if immediate == true', function (done) {
        var cb = sinon.spy();
        debounce(cb, 350, true);
        debounce(cb, 350, true);
        expect(cb.calledTwice).to.equal(true);
        done();
    });
});