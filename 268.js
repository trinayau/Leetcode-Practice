/* LeetCode Problem 268: Missing Number */
/* Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array. */
/**
 * @param {number[]} nums
 * @return {number}
 */

var missingNumber = function(nums) {
    for (let i = 0; i < nums.length; i++){
        if(!nums.includes(i)){
            return i
        }
    }
     
 };

 //Test cases
 console.log(missingNumber([3,0,1])) //Answer: 2
