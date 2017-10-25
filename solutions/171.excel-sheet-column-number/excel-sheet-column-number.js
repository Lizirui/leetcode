/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function(s) {
    var result = 0
    for (var i = 0; i < s.length; i++) {
        result = result * 26 + (s[i].charCodeAt() - 64)
    }
    return result 
};