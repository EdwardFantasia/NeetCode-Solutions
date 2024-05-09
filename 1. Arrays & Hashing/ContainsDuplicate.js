/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let dict = {}
    let duplicate = false

    for(let i = 0; i < nums.length; i++){
        if(dict[nums[i]] == undefined){
            dict[nums[i]] = 1
        }
        else{
            dict[nums[i]] += 1
        }
    }

    let values = Object.values(dict)

    for(let i = 0; i < values.length; i++){
        if(values[i] > 1){
            duplicate = true
            break
        }
    }
    return duplicate
};
