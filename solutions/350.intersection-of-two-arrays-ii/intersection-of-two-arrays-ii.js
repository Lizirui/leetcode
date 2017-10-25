/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1,nums2){
    var result = []
    if (nums1 == [] || nums2 == []) {
        return []
    }
    for (var i = 0; i < nums1.length; i++) {
        for (var j = 0; j < nums2.length; j++) {
            if (nums1[i] == nums2[j]) {
                result.push(nums1[i])
                nums2.splice(j, 1)
                j--
                nums1.splice(i, 1)
                i--
            }
        }
    }
    return result
};