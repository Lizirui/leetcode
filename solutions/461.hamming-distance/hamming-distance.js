/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
    var num = x ^ y
    var count = 0
    while (num) {
        num = num & (num - 1)
        count++
    }
    return count 
};