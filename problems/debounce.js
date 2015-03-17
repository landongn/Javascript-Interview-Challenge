
/**
 * Write a function that accepts a function and timeout, `x`, in number of milliseconds. 
 * It will return a new function that can only be executed on per timeout period,
 * and if the function is invoked during the timeout period, the timeout period restarts. 
 * @param  {Function} fn        the function to debounce
 * @param  {Number}   timeout   the milliseconds to wait before accepting input
 * @param  {Boolean}  immediate if true, the provided fn should execute immediately
 */

module.exports = function (fn, timeout, immediate) {
    // false == can run true == cant
    
    flag = false;

    return function(){

        if(immediate){
            return fn();
        } else {

            if(flag === false){
                flag = true;
                setTimeout(function(){
                    flag = false;
                }, timeout);
                return fn();
            }

        }
    };
};

