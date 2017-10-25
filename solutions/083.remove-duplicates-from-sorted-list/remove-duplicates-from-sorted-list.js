/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    if (!head) {
        return []
    }
    var prev = head
    while (prev.next) {
        if (prev.val == prev.next.val) {
            prev.next = prev.next.next
        } else {
            prev = prev.next
        }
    }
    return head
};