/**
 * Write a function that accepts a multi dimensional array and returns a flattened version.
 * 
 * @param  {Array} set  the multidimensional array to flatten
 */
module.exports = function (set) {
    var newArray = [];

    function iterate(arry) {
        for (var i = 0, len = arry.length; i < len; i++) {
            var item = arry[i];
     
            if(Array.isArray(item)){
                iterate(item);
            } else {
                newArray.push(item);    
            }
            
        }
        return newArray;
    }
    
    return iterate(set);
    
};

