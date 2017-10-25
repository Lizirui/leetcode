/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices == null || prices.length <= 1) {
        return 0
    }
    var min = prices[0]
    var count = 0
    for (var i = 0; i < prices.length; i++) {
        if (prices[i] < min) {
            min = prices[i]
        } else if (count < prices[i] - min) {
            count = prices[i] - min
        }
    }
    return count 
};