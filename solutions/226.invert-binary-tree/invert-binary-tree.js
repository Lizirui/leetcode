/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(nums) {
    if (nums == null) {
        return nums
    }
    [nums.left, nums.right] = [nums.right, nums.left]
    invertTree(nums.left)
    invertTree(nums.right)
    return nums
};