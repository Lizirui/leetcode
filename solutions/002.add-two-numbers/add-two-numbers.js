/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    var list = new ListNode(0);
    var result = list;

    var sum,carry = 0;

    while(l1 || l2 || carry > 0){
        sum = 0;

        if(l1!== null){
            sum += l1.val;
            l1 = l1.next;
        }

        if(l2!==null){
            sum += l2.val;
            l2 = l2.next;
        }
        sum += carry;
        list.next = new ListNode(sum%10);
        carry = parseInt(sum/10);
        list = list.next;
    }
    return result.next;
};