/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  for(var i = 0; i<s.length; i++) {  
    if(s.lastIndexOf(s.charAt(i))==s.indexOf(s.charAt(i))) return i;  
   }  
   return -1;
};