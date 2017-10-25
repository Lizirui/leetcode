/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    if(b==0){return a};
    if(a==0){return b};  

    while(b!=0){
        var carry = a&b;

        a = a^b;        

        b = carry << 1; 
    }
    return a;
};