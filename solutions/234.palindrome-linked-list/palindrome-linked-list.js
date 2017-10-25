/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head) {
        return true
    }

    function listToAry(head) {
        if (!head) {
            return undefined
        }
        var result = []
        var prev = head
        while (prev !== null) {
            result.push(prev.val)
            prev = prev.next
        }
        return result
    }

    function isPalindromic(str) {
        for (var i = 0; i <= str.length / 2; i++) {
            if (str[i] != str[str.length - i - 1]) {
                return false
            }
        }
        return true
    }
    return isPalindromic(listToAry(head))
};