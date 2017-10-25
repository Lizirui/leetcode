/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    nums.sort((a, b) => a - b)
    for (let i = 0; i < nums.length; i = i + 3) {
        if (nums[i] != nums[i + 1]) {
            if (nums[i] != nums[i + 2]) {
                return nums[i]
            } else {
                return nums[i + 1]
            }
        }
        if (nums[i] != nums[i + 2]) {
            if (nums[i] != num[nums[i + 1]]) {
                return nums[i]
            } else {
                return nums[i + 2]
            }
        }
    }    
};