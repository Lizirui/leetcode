/**
 * Definition for binary tree
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @constructor
 * @param {TreeNode} root - root of the binary search tree
 */
var BSTIterator = function(root) {
    this.iterator = generator(root)
    this.curr = this.iterator.next()

    function* generator(root) {
        if (root) {
            yield * generator(root.left)
            yield root.val
            yield * generator(root.right)
        }
    }
};


/**
 * @this BSTIterator
 * @returns {boolean} - whether we have a next smallest number
 */
BSTIterator.prototype.hasNext = function() {
    return !this.curr.done
};
/**
 * @this BSTIterator
 * @returns {number} - the next smallest number
 */
BSTIterator.prototype.next = function() {
    try {
        return this.curr.value
    } finally {
        this.curr = this.iterator.next()
    }
};

/**
 * Your BSTIterator will be called like this:
 * var i = new BSTIterator(root), a = [];
 * while (i.hasNext()) a.push(i.next());
 */