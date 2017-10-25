/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    var result = []
    var a = 0
    for (var i = 1; i <= n; i++) {
        a = i
        if (a % 3 == 0 && a % 5 == 0) {
            a = "FizzBuzz"
        } else if (a % 3 == 0) {
            a = "Fizz"
        } else if (a % 5 == 0) {
            a = "Buzz"
        }
        a = a + ""
        result.push(a)
    }
    return result
};