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
var hasCycle = function(head) {
    if (head == null || head.next == null) {
        return false
    }
    var s = head.next
    var f = head.next.next
    if (f == null) {
        return false }

    while (s != f) {
        if (f.next == null) {
            return false
        }
        s = s.next
        f = f.next.next
        if (s == null || f == null) {
            return false
        }
    }
    return true  
};