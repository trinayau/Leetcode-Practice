//Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

var twoSum = function(nums, target) {
    let map = {};
    for(let i = 0; i < nums.length; i++) {
        if(map[nums[i]] !== undefined) {
            return [map[nums[i]], i];
        }
        map[target - nums[i]] = i;
    }
}

console.log(twoSum([2,7,11,15], 9)) //Answer: [0,1]
