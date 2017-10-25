/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    var result = [];
    var store;
    var ary;
    if(nums1.length > nums2.length){
        store = nums1;
        ary = nums2;
    } else {
        store = nums2;
        ary = nums1;
    }
    for(var i = 0 ; i < ary.length ; i++){
        var value = ary[i];
        if(store.indexOf(value) >= 0 && result.indexOf(value) == -1){
            result.push(value);
        }
    }
    return result;
};