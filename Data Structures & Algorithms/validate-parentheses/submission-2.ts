class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s: string): boolean {
        const map = {
            ')': '(',
            '}': '{',
            ']':'['
        };
        
        const arr = [];

        for (let ch of s) {
            if (map[ch] && arr[arr.length - 1] === map[ch]) {
               arr.pop();
            } else  {
                arr.push(ch)
            }
        }

        if (arr.length === 0) {
            return true;
        } else {
            return false;
        }
       

    }
}
