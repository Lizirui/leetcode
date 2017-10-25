/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
    var bigit = new Set(candies).size
    var result = 0
    var l = candies.length / 2
    if(bigit >= l) {
    	result = l
    }else {
    	result = bigit
    }
    return result
};