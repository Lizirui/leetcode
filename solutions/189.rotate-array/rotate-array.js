/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
var l = nums.length
    var count = 0
    if (k > l) {
        while (k > l) {
            k = k - l
        }
    }
    if (k == 0 || k == l) {
        nums = nums
    } else {
        for (var i = l - 1; i >= l - k; i--) {
            nums.unshift(nums[i])
            nums.pop()
            i++
            count++
            if (count == k) {
                break
            }
        }
    }
};