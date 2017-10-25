/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length == 0) {
        return 0
    }
    var index = 0
    for(let i = 1; i < nums.length;i++){
        if(nums[index] != nums[i]) {
            nums[++index] = nums[i]
        }
    }
    return index + 1
};