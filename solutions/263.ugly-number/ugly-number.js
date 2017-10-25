/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function(num) {
    if (num <= 0) {
        return false
    }
    if(num <= 6 && num > 0) {
    	return true
    }
    var digit = num
    while (digit % 2 === 0 || digit % 3 === 0 || digit % 5 === 0) {
        if (digit % 2 === 0) {
            digit = digit / 2
        }
        if (digit % 3 === 0) {
            digit = digit / 3
        }
        if (digit % 5 ===0) {
            digit = digit / 5
        }
    }
    if(digit == 1) {
    	return true
    }else {
    	return false
    } 
};