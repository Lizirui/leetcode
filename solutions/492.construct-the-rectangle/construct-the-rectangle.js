/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function(area) {
    if (area <= 0 || !area) {
        return []
    }
    var middle = Math.sqrt(area)
    var n = 0
    var m = middle | 0
    if (middle == m) {
        return [middle, middle]
    } else {
        do {
            m++
            n = area / m
        } while ((n | 0) != n && m <= area)
    }
    return [m, n]
};