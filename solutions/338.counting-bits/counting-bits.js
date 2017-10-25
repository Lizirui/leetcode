/**
 * @param {number} num
 * @return {number[]}
 */
var countBits = function(num) {
    var result = new Array(num + 1)
    result = result.fill(0)
    for (var i = 0; i <= num; i++) {
        result[i] = result[i >> 1] + (i & 1)
    }
    return result
};