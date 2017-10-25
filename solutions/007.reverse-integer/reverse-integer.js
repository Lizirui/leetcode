/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    var INT_MAX = Math.pow(2, 31) - 1
    var str
    var result = ""
    if (x == 0) {
        return x
    } else if (x > 0) {
        str = x + ""
    } else {
        str = (x * (-1)) + "-"
    }
    var l = str.length
    for (var i = 0; i < l; i++) {
        result = str[i] + result
    }
    result = parseInt(result)
    if (result > INT_MAX || result < -(1 + INT_MAX)) {
        return 0
    } else {
        return result
    }
};