/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
var result = []
    return traverse(root)

    function traverse(root) {
        if (root == null) {
            return []
        }
        if (root) {
            result.push(root.val)
            traverse(root.left)
            traverse(root.right)
        }
        return result
    }
};