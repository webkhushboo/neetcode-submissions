class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        const map = new Map();
        for (let index = 0; index < nums.length; index++) {
         const compliment = target - nums[index];
         if (map.has(compliment)) {
           return [index, map.get(compliment)]
         }
          map.set(nums[index], index);
        }
    }
}
