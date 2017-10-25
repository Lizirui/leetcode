/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums = nums.sort()
    var ln = nums.length
    if (ln % 2 != 0) {
        return nums[(ln / 2) | 0]
    } else {
        return nums[ln / 2]
    }  
};