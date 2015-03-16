/**
 * Write a function that accepts a multi dimensional array and returns a flattened version.
 * 
 * @param  {Array} set  the multidimensional array to flatten
 */
module.exports = function (set) {

    var flattenedArray = [];

    function iterate (step) {
        if (Array.isArray(step)) {
            for (var i = 0; i < step.length; i++) {
                iterate(step[i]);
            }
        } else {
            flattenedArray.push(step);
        }
    }

    // var t0 = new Date().getTime();
    for (var i = 0; i < set.length; i++) {
        iterate(set[i]);
    }
    // var t1 = new Date().getTime();

    // console.log("Perf:", t1 - t0);

    return flattenedArray;
};