/**
 * @param {number[]} nums
 * @return {number[]}
 */
var singleNumber = function(nums) {
    var result = []
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i = i + 2) {
        if (nums[i] != nums[i + 1]) {
            result.push(nums[i])
            nums.splice(i, 1)
            i = i - 2
        }
        if (result.length == 2) {
            return result
        }
    }
    return result
};