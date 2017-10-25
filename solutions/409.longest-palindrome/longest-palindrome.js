/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function(s) {
      function f(str) {
        let temp = [];
        for (let i = 0; i < str.length; i++) {
            if (temp[str[i]] == undefined) {
                temp[str[i]] = 1;
            } else {
                temp[str[i]] += 1;
            }
        }
        return temp;
    }
    let word = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
    let ary = f(s)
    let count = 0
    for (let i = 0; i < word.length; i++) {
        if (ary[word[i]] === undefined) {
            continue
        } else {
            count += ary[word[i]] / 2 | 0
        }
    }
    count = count * 2
    if (count < s.length) {
        return count + 1
    } else if (count == s.length) {
        return count
    } 
};