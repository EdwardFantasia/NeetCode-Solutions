/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let dict = {}
    
    let freqElements = []

    for(let i = 0; i < nums.length; i++){
        if(nums[i] in dict){
            dict[nums[i]] += 1
        }
        else{
            dict[nums[i]] = 1
        }
    }

    let dictValues = Object.values(dict)
    let dictKeys = Object.keys(dict)
    let maxIndex = 0
    let tempNums = nums

    for(let i = 0; i < k; i++){
        maxIndex = dictValues.indexOf(Math.max(...dictValues))
        freqElements.push(dictKeys[maxIndex])
        dictValues.splice(maxIndex, 1)
        dictKeys.splice(maxIndex, 1)
    }

    return freqElements
};
