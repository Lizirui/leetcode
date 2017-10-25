/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var result = ''
    var t = x
    var digit
    while (t >= 1) {
        digit = t % 10
        result = result + digit
        t = (t - digit) / 10
    }
    if (result == '' + x || x == 0) {
        return true
    }
    return false
};