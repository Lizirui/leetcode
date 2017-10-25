/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    return s.split(' ').map(it => it.split('').reverse().join('')).join(' ')
};