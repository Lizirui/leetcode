/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    var a = 0
    var b = 0
    for (var i = 0; i < nums.length; i++) {
        var m = a
        var n = b
        a = n + nums[i]
        b = Math.max(m, n)
    }
    return Math.max(a, b)
};