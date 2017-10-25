/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    var maxSum = -Infinity
    var tempSum = 0
    for(var i = 0;i<nums.length;i++) {
    	tempSum = Math.max(tempSum+nums[i],nums[i])
    	maxSum = Math.max(maxSum,tempSum)
    }
    return maxSum  
};