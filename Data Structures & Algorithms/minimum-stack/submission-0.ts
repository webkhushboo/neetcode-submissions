class MinStack {
    
    stack: number[];
    minStack: number[];
    constructor() {
        this.stack = [];
        this.minStack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        this.stack.push(val);

        if (this.minStack.length === 0 || val <= this.minStack[this.minStack.length -         1]) {
            this.minStack.push(val);
        }
    }

    /**
     * @return {void}
     */
    pop(): void {
        let value = 0;
        if (this.stack.length !== 0) {
            value = this.stack.pop();
        }

        if (value === this.minStack[this.minStack.length - 1]) {
            this.minStack.pop();
        }
    }

    /**
     * @return {number}
     */
    top(): number {
        if (this.stack.length !== 0) {
            return this.stack[this.stack.length - 1];
        }
    }

    /**
     * @return {number}
     */
    getMin(): number {
       return this.minStack[this.minStack.length - 1];
    }
}
