/* LeetCode Problem 268: Missing Number */
/* Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array. */
/**
 * @param {number[]} nums
 * @return {number}
 */

 var missingNumber = function(nums) {
    let sum = nums.reduce((a,b) => a+b);
    let n = nums.length;
    return n*(n+1)/2 - sum;
    };

 //Test cases
 console.log(missingNumber([3,0,1])) //Answer: 2
 console.log(missingNumber([9,6,4,2,3,5,7,0,1])) //Answer: 8
 console.log(missingNumber([0,1])) //Answer: 2
