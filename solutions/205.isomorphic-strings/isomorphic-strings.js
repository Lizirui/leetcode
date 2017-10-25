/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    var mapS = {};
    var mapT = {};

    for(var i in s){
        var valueS = s[i];
        var valueT = t[i];
        if(!mapS[valueS]){
            mapS[valueS] = valueT;
        } else if(mapS[valueS] != valueT) { 
            return false;
        }

        if(!mapT[valueT]){
            mapT[valueT] = valueS;
        } else if(mapT[valueT] != valueS) { 
            return false;
        }
    }
    return true;    
};