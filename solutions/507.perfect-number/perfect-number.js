/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function(num) {
    if (num == 0 || num == 1) {
        return false
    }
    var result = num
    for (var i = 1; i * i <= num; i++) {
        if (num % i == 0) {
            if (i * i != num && i != 1) {
                result = result - i - num / i
            } else {
                result = result - i;
            }
        }
    }
    if (result == 0) {
        return true
    } else {
        return false
    }
};