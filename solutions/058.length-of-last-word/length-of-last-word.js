/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    if (s.length == 0) {
        return 0
    }
    var ary = s.split(' ')
    var lastary = []
    while (ary[ary.length - 1] == "") {
        ary.pop()
    }
    if (ary.length == 0) {
        return 0
    }
    lastary.push(ary[ary.length - 1])
    return lastary[0].length
};