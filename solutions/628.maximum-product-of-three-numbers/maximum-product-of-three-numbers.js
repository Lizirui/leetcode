/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    if (nums.length == 3) {
        return nums[0] * nums[1] * nums[2]
    }
    nums.sort(function(a, b) {
        return a - b
    })
    return Math.max(nums[nums.length - 1] * nums[nums.length - 2] * nums[nums.length - 3], nums[nums.length - 1] * nums[0] * nums[1])
};