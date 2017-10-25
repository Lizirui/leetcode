/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function(num1, num2) {
    var addStrings = function(num1, num2) {
        var result = []
        var l1 = num1.length
        var l2 = num2.length
        var l = Math.max(l1, l2)
        for (; l > 0; l--) {
            result.push(0)
        }
        l = Math.max(l1, l2)
        for (l1 = l1 - 1, l2 = l2 - 1, l = l - 1; l >= 0; l1--, l2--, l--) {
            if (l1 < 0) {
                result[l] = (num2[l2]) * 1 + result[l]
            } else if (l2 < 0) {
                result[l] = (num1[l1]) * 1 + result[l]
            } else {
                result[l] = (num1[l1]) * 1 + (num2[l2]) * 1 + result[l]
            }
            if (result[l] >= 10 && l != 0) {
                result[l] = result[l] % 10
                result[l - 1] = 1
            }

        }
        if (result[0] >= 10) {
            result[0] = result[0] % 10
            result.unshift(1)
        }
        return result
    };
    var result = []
    var l1 = num1.length
    var l2 = num2.length
    var bigit = 0
    var sum = 0
    var run = []
    var j = 1
    for (l1 = l1 - 1; l1 >= 0; l1--) {
        for (l2 = l2 - 1; l2 >= 0; l2--) {
            sum = (num1[l1] * 1) * (num2[l2] * 1) % 10 + bigit
            if (sum < 10) {
                result.unshift(sum)
                bigit = (num1[l1] * 1) * (num2[l2] * 1) / 10 | 0
            } else {
                result.unshift(sum % 10)
                bigit = ((num1[l1] * 1) * (num2[l2] * 1) / 10 | 0) + 1
            }
            if (l2 == 0) {
                result.unshift(bigit)
                bigit = 0
            }
        }
        l2 = num2.length
        result = addStrings(result, run)
        run = result
        result = []
        for (var i = j; i > 0; i--) {
            result.push(0)
        }
        j++
    }
    while(run[0] === 0){
        run.shift()
    }
    if(run.length == 0) {
        run.push(0)
    }
    run = run.join('')
    return run
};