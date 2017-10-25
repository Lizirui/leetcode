/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function(s, t) {
    var result
    var a = 0
    var b = 0
    for (var i = 0; i < s.length; i++) {
        a = a + s[i].charCodeAt(0)
    }
    for (var j = 0; j < t.length; j++) {
        b = b + t[j].charCodeAt(0)
    }
    result = b - a
    return String.fromCharCode(result)    
};