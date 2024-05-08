/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    let sLetters = s.split("")
    let tLetters = t.split("")

    return sLetters.sort().join() == tLetters.sort().join()
};
