/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    let testMap = {}
    let curSeq = 1
    let longestSeq = 1

    for(let i = 0; i < nums.length; i++){
        testMap[nums[i]] = 1
    }

    let keys = Object.keys(testMap)

    for(let i = 1; i < keys.length; i++){  
        if(parseInt(keys[i]) == parseInt(keys[i-1]) + 1){
            curSeq += 1
        }
        else{
            if(curSeq > longestSeq){
                longestSeq = curSeq
            }
            curSeq = 1
        }
    }

    if(curSeq > longestSeq){
        longestSeq = curSeq
    }
    return longestSeq
};
