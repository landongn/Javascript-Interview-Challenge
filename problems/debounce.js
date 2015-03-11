
/**
 * Write a function that accepts a function and timeout, `x`, in number of milliseconds. 
 * It will return a new function that can only be executed on per timeout period,
 * and if the function is invoked during the timeout period, the timeout period restarts. 
 * @param  {Function} fn        the function to debounce
 * @param  {Number}   timeout   the milliseconds to wait before accepting input
 * @param  {Boolean}  immediate if true, the provided fn should execute immediately
 */

var currentTimeout = false;
module.exports = function (fn, timeout, immediate) {
    if (immediate) {
        return fn();
    }
    if (currentTimeout === false) {
        currentTimeout = setTimeout(function() {
            currentTimeout = false;
        }, timeout);
        fn();
    } else {
        return false;
    }
};

