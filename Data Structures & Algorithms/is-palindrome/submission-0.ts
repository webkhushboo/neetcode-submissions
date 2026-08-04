class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
      const str = s.toLowerCase();
      let i = 0;
      let j = str.length - 1;
      while (i < j) {
       while (i < j && !this.isAlpha(str[i])) {
        i++;
       }

       while (i < j && !this.isAlpha(str[j])) {
        j--;
       }

       if (str[i] !== str[j]) {
        return false;
       }
       i++;
       j--;
      }
      return true
      
    }

    isAlpha(char): boolean {
      const code = char.charCodeAt(0);
      return (( code >=48 && code <=57)  ||
           (code >=65 && code <=90)  ||
           (code >=97 && code <=122 ))
    }

}
