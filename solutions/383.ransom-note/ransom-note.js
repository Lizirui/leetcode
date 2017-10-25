/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    var ranAry = ransomNote.split('')
    var magAry = magazine.split('')
    for (var i = 0; i < ransomNote.length; i++) {
        for (var j = 0; j < magazine.length; j++) {
            if (ranAry[i] === magAry[j]) {
                magAry.splice(j, 1)
                j--
                break
            }
        }
    }
    if (magAry.length == magazine.length - ransomNote.length) {
        return true
    } else {
        return false
    }
};