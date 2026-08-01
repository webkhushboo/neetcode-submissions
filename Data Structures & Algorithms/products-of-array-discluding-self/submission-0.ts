class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]): number[] {
     
     const n = nums.length;
     const prefix = new Array(n).fill(1);
     const suffix = new Array(n).fill(1);
     const answer = new Array(n);

     // calculate prefix of array
     for (let i=1;i<n;i++) {
        prefix[i] = prefix[i-1] * nums[i-1]; 
     }

     // calcualte suffix of array 
     for (let i =n-2; i >=0; i--) {
        suffix[i] = suffix[i+1] * nums[i+1];
     }

     // calcuate product by multiply prefix and suffix
     for (let i=0;i<n;i++) {
        answer[i] = prefix[i] * suffix[i];
     }

     return answer;
    
      
     


    }
}
