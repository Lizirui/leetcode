/**
 * @param {number[][]} nums
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function(nums, r, c) {
    var l1 = nums.length
    var l2 = nums[0].length
    var result = []
    var ary = []
    var newAry = []
    var j = 0
    var k = 0
    var i = 0
    if (l1 * l2 != r * c) {
        return nums
    } else {
        for (l1 = l1 - 1; l1 >= 0; l1--) {
            for (l2 = l2 - 1; l2 >= 0; l2--) {
                result.unshift(nums[l1][l2])
            }
            l2 = nums[0].length
        }
    }
    for (; i < r; i++) {
        for (; j < c, k <= result.length; j++, k++) {
            if (k < result.length && j < c) {
                ary[j] = result[k]
            } else {
                newAry[i] = ary
                ary = []
                j = 0
                break
            }
        }
    }
    return newAry
};