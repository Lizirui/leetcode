/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    var sl = s.length
    var ary = t.split('')
    var al = ary.length
        if (sl != al) {
        return false
    }
    for (var i = 0; i < sl; i++) {
        for (var j = 0; j < al; j++) {
            if (s[i] == ary[j]) {
                ary.splice(j, 1)
                break
            }
        }
    }
    if (ary.length == 0) {
        return true
    } else {
        return false
    }
};