/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if (n <= 1) {
        return 1
    }
    var result = 1
    var digit = 1
    for (var i = 2; i <= n; i++) {
        var temp = result
        result = result + digit
        digit = temp
    }
    return result 
};