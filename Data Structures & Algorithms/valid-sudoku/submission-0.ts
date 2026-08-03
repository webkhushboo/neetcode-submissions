class Solution {
    /**
     * @param {character[][]} board
     * @return {boolean}
     */
    isValidSudoku(board: string[][]): boolean {
      const rows = Array.from({length: 9}, ()=> new Set<string>());
      const columns = Array.from({ length: 9 }, () => new Set<string>());
      const boxes = Array.from({ length: 9 }, () => new Set<string>());

      for(let i=0; i<9;i++) {
        for (let j=0;j<9;j++) {
            const value = board[i][j];
            if (value === '.') {
                continue;
            }
            const box = Math.floor(i/3) * 3 + Math.floor(j/3);

            if (rows[i].has(value) || columns[j].has(value) ||    boxes[box].has(value)) {
                return false;
            }
            rows[i].add(value);
            columns[j].add(value);
            boxes[box].add(value);
        }
      }
      return true;

    }
}
