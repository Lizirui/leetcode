/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    function maxDigit(ary, n) {
        if (n == ary.lentgh - 1) {
            return (-1)
        }
        for (var i = n + 1; i < ary.length; i++) {
            if (ary[n] < ary[i]) {
                return ary[i]
            }
        }
        return (-1)
    }
    var result = []
    var l = nums.length
    var lf = findNums.length
    var digit = 0
    for (var i = 0; i < lf; i++) {
        for (var j = 0; j < l; j++) {
            if (findNums[i] == nums[j]) {
                result.push(maxDigit(nums, j))
            }
        }
    }
    return result
};