class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let string = ""
        for(let i = 0; i < strs.length; i++){
            string += "#" + strs[i].length + strs[i]
        }
        
        return string
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let array = []
        let splitString = str.split("")

        for (let i = 0; i < splitString.length; i++){
            if(splitString[i] == "#"){
                if(Number.isNaN(parseInt(splitString[i + 1])) == false){
                    array.push(splitString.slice(i+2, i+(2 + parseInt(splitString[i + 1]))).join(""))
                }
            }
        }

        return array
    }
}
