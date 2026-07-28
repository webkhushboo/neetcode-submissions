class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s: string, t: string): boolean {
        const map = new Map();

        if (s.length !== t.length) {
            return false;
        }
        for (let char of s.split('')){
           map.set(char, (map.get(char) || 0) + 1 )
        }
        for (let char of t.split('')){
           if (map.has(char) && map.get(char) !== 0) {
            map.set(char, (map.get(char) - 1));
           } else {
            return false;
           }

        }
        return true;
        
    }
}
