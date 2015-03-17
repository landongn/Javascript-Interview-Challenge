var expect = require('chai').expect;
var sinon = require('sinon');
var Flatten = require('../problems/flatten');

describe('Flatten', function () {
    var testArray = [[1,2,3], [4,5,6], [7]];

    it('should return a single array with no sub-arrays', function (done) {
        
        var newArray = Flatten(testArray);
        expect(newArray.length).to.equal(7);
        done();
    });

    // extra credit! What else could we test here?
});