/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function(s) {
    if(s == "") {
        return 0
    }
    var ary = s.split(' ')
    for(var i = 0;i<ary.length;i++) {
        if(ary[i] == ""){
            ary.splice(i,1)
            i--
        }
    }
   return ary.length 
};