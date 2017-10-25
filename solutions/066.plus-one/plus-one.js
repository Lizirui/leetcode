/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var result = digits
    var a = digits.length - 1
    result[a] = result[a] + 1
    for (var i = a; i >= 0; i--) {
        if (result[i] == 10 && i !== 0) {
            result[i - 1] = result[i - 1] + 1
            result[i] = 0
        }
    }
    if (result[0] == 10) {
        result[a + 1] = 0
        result[0] = 1
    }
    return result
};