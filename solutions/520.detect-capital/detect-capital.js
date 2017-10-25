/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    var upAry = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
    var count = 0
    for (var i = 0; i < word.length; i++) {
        if (upAry.indexOf(word[i]) > -1) {
            count++
        }
    }
    if (count == word.length || count == 0) {
        return true
    } else if (count == 1 && upAry.indexOf(word[0]) > -1) {
        return true
    } else {
        return false
    }
};