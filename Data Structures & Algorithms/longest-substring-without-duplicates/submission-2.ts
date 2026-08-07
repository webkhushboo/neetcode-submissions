class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let left = 0;
        let maxLen = 0;
        const map = new Map();

        for (let right = 0; right < s.length ; right++) {
          const ch = s[right];
          if (map.has(ch) && map.get(ch) >= left) {
            
            left = map.get(ch) + 1;
          } 

          map.set(ch, right);
          let length = right - left + 1;
          maxLen = Math.max (length , maxLen);
        }

        return maxLen;
    }
}
