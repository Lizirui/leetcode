/**
 * @param {number} num
 * @return {boolean}
 */
var isPowerOfFour = function(num) {
    	if(num <= 0) {
		return false
	}
	if (num == 1) {
        return true
    }
    if(num % 2 == 0) {
    	while(num % 4 == 0) {
    		num = num / 4
    	}
    	if(num == 1) {
    		return true
    	}else {
    		return false
    	}
    }else {
    	return false
    }
};