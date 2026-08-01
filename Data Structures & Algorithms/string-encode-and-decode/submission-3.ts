class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs: string[]): string {
        let results: string = ''; 
        for (let str of strs) {
            results += str.length + '#' + str;

        }
        console.log(results);

        return results;
    }

    // input ['neet', 'code'] --- 4#neet4#code
    

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str: string): string[] {
        let results: string[] = [];
        let i = 0;
        while(i<str.length) {
           let j=i;

           // Find the position of #
           while (str[j] !== '#') {
            j++;
           }

           // Extract the string length
           let length:number = Number(str.substring(i,j));
            
            // Move #
            j++;
           
           // Extract the string
           const result = str.substring(j, j+length);
           i = j+length;

           results.push(result);


        }

        return results;
    }
}
