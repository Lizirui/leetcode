/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, va) {
    if (head == null) {
        return null
    }
    var node = {
        val: null,
        next: null,
    }
    var prev = node
    node.next = head
    while (head != null) {
        if (head.val != va) {
            prev = head
            head = head.next
        } else {
            prev.next = head.next
            head = head.next
        }

    }
    return node.next
};