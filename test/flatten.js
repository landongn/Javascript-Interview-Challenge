var expect = require('chai').expect;
var sinon = require('sinon');
var Flatten = require('../problems/flatten');

describe('Flatten', function () {

    describe('when given a single dimensional array', function () {

        it('should return a single array with no sub-arrays', function () {
            var actual = Flatten([1, 2, 3, 4]);
            expect(4).to.equal(actual.length);
        });

    });

    describe('when given a multi-dimensional array', function () {

        it ('should return a single array with no sub-arrays', function () {
            // for (var i = 0; i < 2 i++) {
            //     for (var j = 0; k < 10000; i++) {
            //         hugeArray.push(i);
            //     };
            // };
            var actual = Flatten([1, 2, 3, [4, 5, 6, [7, 8, 9]]]);
            expect(9).to.equal(actual.length);
        });
    });

    // extra credit! What else could we test here?
});