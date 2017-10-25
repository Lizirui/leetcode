/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
    if(nums.length <= 1) return false
    var map = {}

    for(var i in nums){
        var v = nums[i]
        if(map[v] && (i - map[v] <= k)){
            return true
        }
        map[v] = i
    }
    return false
};