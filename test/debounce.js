var expect = require('chai').expect;
var sinon = require('sinon');
var debounce = require('../problems/debounce');

describe('Debounce', function () {
    it('should work with a single input', function (done) {
        var callback = sinon.spy();

        var testa = debounce(callback, 200, false);
        testa();

        expect(callback.calledOnce).to.equal(true);
        done();

    });

    it('should only execute once on multiple calls', function (done) {
        var callback = sinon.spy();
        var testa = debounce(callback, 200, false);
        
        testa();
        testa();
        testa();

        setTimeout(function () {
            expect(callback.calledOnce).to.equal(true);
            done();
        }, 400);
    });

    it('should execute immediately if immediate == true', function (done) {
        var callback = sinon.spy();
        var testa = debounce(callback, 200, true);
        testa();
        testa();
        testa();
        expect(callback.calledThrice).to.equal(true);
        done();
    });

    it('independant callbacks should work', function (done) {
        var callbacka = sinon.spy();
        var callbackb = sinon.spy();
        var callbackc = sinon.spy();
        var testa = debounce(callbacka, 200, true);
        var testb = debounce(callbackb, 200, true);
        var testc = debounce(callbackc, 200, true);
        testa();
        testb();
        testc();
        testa();
        testb();
        testc();
        testa();
        testb();
        testc();
        expect(callbacka.calledThrice).to.equal(true);
        expect(callbackb.calledThrice).to.equal(true);
        expect(callbackc.calledThrice).to.equal(true);
        done();
    });


});