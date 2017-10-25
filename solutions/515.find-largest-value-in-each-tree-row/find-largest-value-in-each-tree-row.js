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
var largestValues = function(root) {
    var array = [];
    recursive(root, array, 0);
    return array;
};

function recursive(node, array, idx) {
    if (!node) return;
    if (array.length === idx) {
        array.push(node.val);
    }
    else {
        array[idx] = Math.max(array[idx], node.val);
    }
    recursive(node.left, array, idx + 1);
    recursive(node.right, array, idx + 1);
};