/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isBalanced = function(root) {
    var maxDepth = function(root) {
        if (root == null) {
            return 0;
        }
        return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
    }
    if (root == null) {
        return true
    }
    var maxL = maxDepth(root.left)
    var maxR = maxDepth(root.right)
    return Math.abs(maxL - maxR) <=1 && isBalanced(root.left) && isBalanced(root.right)
};