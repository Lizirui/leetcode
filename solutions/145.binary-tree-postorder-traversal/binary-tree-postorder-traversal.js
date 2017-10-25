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
var postorderTraversal = function(root) {
    var result = []
    return traverse(root)

    function traverse(root) {
        if (root == null) {
            return []
        }
        if (root) {
            traverse(root.left)
            traverse(root.right)
            result.push(root.val)
        }
        return result
    }  
};