/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function(nums) {
    var result = 0
    var a = minDigit(nums)

    function minDigit(nums) {
        var n = nums[0]
        for (var j = 1; j < nums.length; j++) {
            if (nums[j] - n < 0) {
                n = nums[j]
            }
        }
        return n
    }
    for (var i = 0; i < nums.length; i++) {
        result = result + (nums[i] - a)
    }
    return result
};