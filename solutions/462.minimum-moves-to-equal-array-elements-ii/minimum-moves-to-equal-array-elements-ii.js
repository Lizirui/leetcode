/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves2 = function(nums) {
    nums.sort((a, b) => a - b)
    var n = nums.length / 2 | 0
    var result = 0
    for (let i = 0; i < nums.length; i++) {
        result += Math.abs(nums[n] - nums[i])
    }
    return result 
};