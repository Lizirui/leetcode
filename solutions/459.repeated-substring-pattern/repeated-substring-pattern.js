/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function(s) {
    if (s.length == 0) {
        return false
    }
    for (var i = 1; i <= s.length / 2; i++) {
        var t = ""
        var c = s.substr(0, i)
        if (s.length % c.length == 0) {
            for (var j = 0; j < s.length / c.length; j++) {
                t += c
            }
        }
        if (t == s) {
            return true
        }
    }
    return false
};