class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums: number[]): number {
      
      // Create set of unique values
      const set = new Set(nums);
   
      let maxLength = 0;

      for (let num of nums) {
        if (!set.has(num - 1)) {
           let current = num;
           let length = 1;

           while (set.has(current + 1)) {
              current++;
              length++;
           }

           maxLength = Math.max(length, maxLength);
        }
      }

      return maxLength;

    }
}
