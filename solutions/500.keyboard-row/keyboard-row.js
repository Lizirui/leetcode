/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
    function diff(ary1, ary2) {
        // 判断ary1是不是ary2的子集
        for (var i = 0; i < ary1.length; i++) {
            for (var j = 0; j < ary2.length; j++) {
                if (ary1[i] == ary2[j]) {
                    break
                } else if (j == ary2.length - 1) {
                    return false
                }
            }
        }
        return true
    }
    if (words.length == 0) {
        return words
    }
    var row1 = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]
    var row2 = ["a", "s", "d", "f", "g", "h", "j", "k", "l"]
    var row3 = ["z", "x", "c", "v", "b", "n", "m"]
    var result = []
    for (var i = 0; i < words.length; i++) {
        var aa = words[i].toLowerCase().split('')
        if (diff(aa, row1)) {
            result.push(words[i])
        }
        if (diff(aa, row2)) {
            result.push(words[i])
        }
        if (diff(aa, row3)) {
            result.push(words[i])
        }
    }
    return result
};