/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
function sortedArrayToBST(ary, start = 0, end = (ary.length-1)) {
    if (!ary.length) {
        return null
    }
    if (start > end) {
        return null
    }
    var middle = (start + end) / 2 | 0
    var root = new TreeNode(ary[middle])
    root.left = sortedArrayToBST(ary, start, middle - 1)
    root.right = sortedArrayToBST(ary, middle + 1, end)
    return root
};