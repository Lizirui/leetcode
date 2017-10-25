/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    var n = nums.length
    var lo = 0
    var h = n / 2 | 0 + 1
    while (lo < h) {
        var m = (lo + h) / 2 | 0
        if (nums[2 * m] != nums[2 * m + 1]) {
            h = m
        } else {
            lo = m + 1
        }
    }
    return nums[lo * 2]
};