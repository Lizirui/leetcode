/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function(n) {
    var result = new Array(n).fill(true)
    result[0] = false
    result[1] = false
    var a = Math.sqrt(n)
    for (var i = 2; i <= a; i++) {
        for (var j = i * i; j < n; j += i) {
            result[j] = false
        }
    }
    var digit = 0
    var l = result.length
    for (var i = 0; i < l; i++) {
        if (result[i]) {
            digit++
        }
    }
    return digit
};