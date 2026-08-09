class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens: string[]): number {
        const operations = ['+','-','*','/'];
        const operands = [];

        for (let token of tokens) {
           if (!operations.includes(token)) {
              operands.push(token);
           } else {
             const firstOperand = operands.pop();
             const secondOperand = operands.pop();
             const sum = this.evalSum(parseInt(secondOperand), parseInt(firstOperand), token); 
             operands.push(sum);
           }
        }

        return operands[operands.length - 1];
    }

    evalSum(first, second, operation) {
        if (operation === '+') {
            return first + second;
        } else if (operation === '-') {
            return first - second;
        } else if (operation === '*') {
            return first * second;
        } else {
            return Math.trunc(first / second);
        }
    }
}
