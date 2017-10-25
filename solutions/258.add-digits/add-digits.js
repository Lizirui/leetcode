/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
    var a = 0
    while (num >= 10) {
        a = num % 10
        num = (num - a) / 10 + a
    }
    return num
};