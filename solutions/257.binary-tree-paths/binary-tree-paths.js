/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    if(!root) return [];
    var list = [];
    findPath(root,"");
    return list;
    function findPath(node,str){
        if(node.right == null && node.left == null){
            list.push(str + node.val); 
        } else {
            if(node.left != null) {
                findPath(node.left,str + node.val + "->" );
            }
            if(node.right != null) {
                findPath(node.right,str + node.val + "->" );
            } 
        }    
    }
};