/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {
    var result = []
    var la = a.length - 1
    var lb = b.length - 1
    var l = result.length = Math.max(la, lb) + 1
    var bigit = 0
    for (l = l - 1; l >= 0; l--, la--, lb--) {
        if (la < 0) {
            bigit = b[lb] * 1 + bigit
        } else if (lb < 0) {
            bigit = a[la] * 1 + bigit
        } else {
            bigit = a[la] * 1 + b[lb] * 1 + bigit
        }
        if (bigit == 0) {
            result[l] = 0
        } else if (bigit == 1) {
            result[l] = 1
            bigit = 0
        } else if (bigit == 2) {
            result[l] = 0
            bigit = 1
        } else if (bigit == 3) {
            result[l] = 1
            bigit = 1
        }
    }
    if (bigit == 1) {
        result.unshift(1)
    }
    result = result.join('')
    return result
};