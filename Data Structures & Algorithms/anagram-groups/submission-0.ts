class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs: string[]): string[][] {
        const map = new Map();
        for (let str of strs) {
            const sortedString = str.split('').sort().join('');
            if (!map.has(sortedString)) {
                map.set(sortedString, [str]);
            } else {
                const list = map.get(sortedString);
                list.push(str);
                map.set(sortedString, list);
            }
        }

        return Array.from(map.values());
    }
}
