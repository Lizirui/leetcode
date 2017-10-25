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
var isSymmetric = function(root) {
    if(root == null) {
        return true
    }
    return sameTree(root.left,root.right)
    function sameTree(r1,r2) {
        if(r1 == null && r2 == null) {
            return true
        }
        if(r1 == null || r2 == null) {
            return false
        }
        if(r1.val != r2.val) {
            return false
        }
        return sameTree(r1.left, r2.right) && sameTree(r1.right, r2.left)
    }
};