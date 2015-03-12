var expect = require('chai').expect;
var sinon = require('sinon');
var Flatten = require('../problems/flatten');

describe('Flatten', function () {
    it('should return a single array length total of array that contains sub-arrays ', function (done) {
        var mockArray = [
            'one',
            'two',
            [
                'apple',
                'orange'
            ],
            'five'
        ];

        var arrayResults = Flatten(mockArray);

        expect(arrayResults.length).to.equal(5);

        done();
    });

    // extra credit! What else could we test here?
});