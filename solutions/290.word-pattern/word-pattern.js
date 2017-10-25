/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function(pattern, str) {
    var patternMap = {};
    var strMap = {};
    var ary = str.split(/\s/)

    if(pattern.length != str.split(/\s/).length){
        return false;
    }

    for(var i in pattern){
        var p = pattern[i];
        var s = ary[i];
        if(!patternMap[p]){
            patternMap[p] = s;
        } else if(patternMap[p] != s){
            return false;
        }

        if(!strMap[s]){
            strMap[s] = p;
        }  else if(strMap[s] != p) {
            return false;
        }

    }

    return true;    
};