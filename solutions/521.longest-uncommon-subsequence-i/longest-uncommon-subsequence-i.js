/**
 * @param {string} a
 * @param {string} b
 * @return {number}
 */
var findLUSlength = function(a, b) {
    var la = a.length
    var lb = b.length
    if(la != lb) {
    	return la > lb?la:lb
    }else {
    	if(a === b) {
    		return -1
    	}else {
    		return la
    	}
    }   
};