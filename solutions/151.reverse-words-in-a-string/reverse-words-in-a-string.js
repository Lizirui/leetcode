/**
 * @param {string} str
 * @returns {string}
 */
var reverseWords = function(str) {
    var n = str.split(' ').reverse()
    for(let i = 0;i < n.length;i++){
        if(n[i] == ''){
            n.splice(i,1)
            i--
        }
    }
    return n.join(' ')
};