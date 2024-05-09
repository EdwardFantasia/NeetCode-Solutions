/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    let dict = {}

    let results = []

    for(let i = 0; i < strs.length; i++){
        if(strs[i].split("").sort().join("") in dict){
            dict[strs[i].split("").sort().join("")].push(strs[i])
        }
        else{
            dict[strs[i].split("").sort().join("")] = [strs[i]]
        }
    }

    let dictValues = Object.values(dict)

    for(let i = 0; i < dictValues.length; i++){
        results.push(dictValues[i])
    }

    return results
};
