/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
       var result = ""
    var l = s.length
    for(var i =0;i<l;i++){
    	result = s[i] + result
    }
    return result 
};