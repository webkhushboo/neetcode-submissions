class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums: number[], k: number): number[] {
      const map = new Map<number, number>();

      for (let element of nums) {
        if (!map.has(element)) {
          map.set(element, 1)
        } else {
          map.set(element, map.get(element) + 1);
        }
      }
      
      // Create bucket to store the keys 
      const bucket: number[][] = new Array(nums.length + 1).fill(null).map(() => []);

      for (const entry of map.entries()) {
        const [key , value] = entry;
        bucket[value].push(key);
      }

      // It will create bucket something like this [[], [3], [2], []]
      
      const ans: number[] = [];
      for (let i= bucket.length-1 ; i >=0 && ans.length < k; i--) {
          for (let element of bucket[i]) {
            ans.push(element);
            if (ans.length === k) break;
          }
      }

      return ans;
    }
}
