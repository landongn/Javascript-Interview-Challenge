/**
 * Write a function that accepts a multi dimensional array and returns a flattened version.
 * 
 * @param  {Array} set  the multidimensional array to flatten
 */
// input is a multidimensional array


module.exports = function (set) {
    var newArray = [];
    function iterate(step){
        for (var i = 0; i < step.length; i++) {

            if(Array.isArray(step[i])){
                iterate(step[i]);
            } else {
                newArray.push(step);
            }

        }
    }
    iterate(set);
    return newArray;
};

