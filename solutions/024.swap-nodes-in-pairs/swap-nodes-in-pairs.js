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
var swapPairs = function(head) {
    if(head == null || head.next == null) return head;
    var prev = head;
    var cur  = head.next;

    while(prev != null && cur != null){
        var temp = prev.val;
        prev.val = cur.val;
        cur.val = temp;

        if(cur.next == null || cur.next.next == null) break;
        prev = cur.next;
        cur  = cur.next.next;     
    }   
    return head;
};