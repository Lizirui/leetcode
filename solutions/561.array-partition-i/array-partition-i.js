/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function(nums) {
    var newNums = nums.sort(function(a, b) {
        return a - b
    })
    var l = newNums.length
    var result = 0
    for (var i = 0; i < l; i += 2) {
        result = result + newNums[i]
    }
    return result
};