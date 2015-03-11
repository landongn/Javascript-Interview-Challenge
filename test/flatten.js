var expect = require('chai').expect;
var sinon = require('sinon');
var Flatten = require('../problems/flatten');

describe('Flatten', function () {
    it('should return a single array with no sub-arrays', function (done) {
        var multi = [1, 2, 3, [3, 1, 2, [31]]],
            test = Flatten(multi);
        expect(test.length).to.equal(7);
        done();
    });

    // extra credit! What else could we test here?
});