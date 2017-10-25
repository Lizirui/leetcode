/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    var count = 0
    var result = 0
    nums.push(0)
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            count++
        } else if (nums[i] == 0) {
            if (count > result) {
                result = count
                count = 0
            } else {
                count = 0
            }
        }
    }
    return result
};