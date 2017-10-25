/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var b = nums.length
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 0) {
            nums.splice(i, 1)
            i--
        }
    }
    var c = nums.length
    for (var j = 0; j < (b - c); j++) {
        nums.push(0)
    }
};