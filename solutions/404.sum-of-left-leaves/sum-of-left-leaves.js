/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function(root) {
        if (root == null) return 0;
        else if (root.left == null && root.right == null) {
            return 0
        }else {
            return ((root.left != null && root.left.left == null && root.left.right == null) ? root.left.val : sumOfLeftLeaves(root.left)) + ((root.right != null && (root.right.left != null || root.right.right != null)) ? sumOfLeftLeaves(root.right) : 0)
        }
};