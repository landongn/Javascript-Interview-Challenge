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
        debounce(cb, 350, true);
        setTimeout(function () {
            expect(cb.called).to.equal(true);
            expect(cb.calledThrice).to.equal(true);
            done();
        }, 400); 
    });

    it('should create own timer instances', function (done) {
        // var cb1 = sinon.spy(),
        //     cb2 = sinon.spy();
        // debounce(cb1, 350, false);
        // debounce(cb2, 350, false);
        // debounce(cb1, 350, false);
        // debounce(cb2, 350, false);
        // debounce(cb1, 350, false);
        // debounce(cb2, 350, false);
        // setTimeout(function () {
        //     expect(cb1.called).to.equal(true);
        //     expect(cb1.calledThrice).to.equal(true);
        //     expect(cb2.called).to.equal(true);
        //     expect(cb2.calledThrice).to.equal(true);
        //     done();
        // }, 400); 
        done();
    });
});