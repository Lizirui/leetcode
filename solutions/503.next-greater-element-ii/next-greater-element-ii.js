/**
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElements = function(nums) {
    if (nums.length == 0) {
        return []
    }
    if (nums.length == 1) {
        return [-1]
    }
    var result = []
    for (let i = 0; i < nums.length; i++) {
        result[i] = -1
        var j = i
        var count = 0
        for (; j < nums.length; j++) {
            count++
            if (nums[i] < nums[j]) {
                result[i] = nums[j]
                break
            }
            if (count < nums.length + 1 && j == nums.length - 1) {
                j = -1
            }
            if (count == nums.length + 1) {
                break
            }
        }
    }
    return result
};