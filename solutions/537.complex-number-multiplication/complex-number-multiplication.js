/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var complexNumberMultiply = function(a, b) {
    var al = a.split("+")
    var bl = b.split("+")
    var bb = al[1].split("i")[0]
    var dd = bl[1].split("i")[0]
    var aa = al[0]
    var cc = bl[0]
    var result = (aa * cc - bb * dd) + "+" + (aa * dd + bb * cc) + "i"
    return result
};