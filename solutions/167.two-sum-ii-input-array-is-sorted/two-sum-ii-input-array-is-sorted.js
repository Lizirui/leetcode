/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    var l = numbers.length
    for (var i = 0; i < l; i++) {
        for (var j = i+1; j < l; j++) {
            if (numbers[i] + numbers[j] == target) {
                break
            }
        }
        if (numbers[i] + numbers[j] == target) {
            break

        }
    }
    return [i+1,j+1] 
};