/**
 * Write a function that accepts a multi dimensional array and returns a flattened version.
 * 
 * @param  {Array} set  the multidimensional array to flatten
 */
module.exports = function (set) {
    var flattened = [];
    var helper = function (val) {
            if (Array.isArray(val)) {
                for (var i = 0; i < val.length; i++) {
                    helper(val[i]);
                }
            } else {
                flattened.push(val);
            }
        };
    helper(set);
    return flattened;
};

// [1, 2, 3, [3, 1, 2, [31]]];