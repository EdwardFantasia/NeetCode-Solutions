class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        let formatted = s.split(" ").join("").toLocaleLowerCase().replace(/[^0-9a-z]/gi, '')
        let j = formatted.length - 1
        let valid = true
        for(let i = 0; i < formatted.length; i++){
            if(i >= j){
                break
            }
            else if(formatted[i] != formatted[j]){
                valid = false
                break
            }
            j = j -1
        }
        return valid
    }
}
