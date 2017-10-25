/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var ary = []
    for (var i = 0; i < s.length; i++) {
        if (s[i] == "(") {
            ary.push(s[i])
            continue
        } else if (s[i] == "[") {
            ary.push(s[i])
            continue
        } else if (s[i] == "{") {
            ary.push(s[i])
            continue
        }
        if (s[i] == ")" && ary[ary.length - 1] == "(") {
            ary.pop()
            continue
        } else if (s[i] == ")" && ary[ary.length - 1] != "(") {
            return false
        }
        if (s[i] == "]" && ary[ary.length - 1] == "[") {
            ary.pop()
            continue
        } else if (s[i] == "]" && ary[ary.length - 1] != "[") {
            return false
        }
        if (s[i] == "}" && ary[ary.length - 1] == "{") {
            ary.pop()
            continue
        } else if (s[i] == "}" && ary[ary.length - 1] != "{") {
            return false
        }
    }
    if (ary.length == 0) {
        return true
    } else {
        return false
    }
};