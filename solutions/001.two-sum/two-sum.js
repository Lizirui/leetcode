/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var hash = {};
    for (var i = 0; i < nums.length; i++) {
        var temp = target - nums[i];
        if (hash[temp] !== undefined) {
            return [i, hash[temp]];
        }
        if (hash[nums[i]] == undefined) {
            hash[nums[i]] = i;
        }
    }
    return []
}; 
