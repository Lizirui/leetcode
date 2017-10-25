/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    var digit = 1
    var count = 0
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] != 0) {
            digit = digit * nums[i]
        }
        if (nums[i] == 0) {
            count++
        }
    }
    var result = []
    for (let i = 0; i < nums.length; i++) {
        if (count == 0) {
            result.push(digit / nums[i])
        }else if(count == 1){
            if (nums[i] == 0) {
                result.push(digit)
            } else {
                result.push(0)
            }
        }else if(count > 1) {
            result.push(0)
        }
    }
    if (count == nums.length) {
        return nums
    } else {
        return result
    }
};