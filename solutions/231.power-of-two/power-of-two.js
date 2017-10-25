/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if (n <= 0) {
        return false
    }
    var bigit = n
    while (bigit % 2 == 0) {
        bigit = bigit / 2
    }
    if (bigit == 1) {
        return true
    } else {
        return false
    }
};