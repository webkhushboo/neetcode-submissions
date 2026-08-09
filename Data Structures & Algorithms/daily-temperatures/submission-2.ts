class Solution {
    dailyTemperatures(temperatures: number[]): number[] {
        const result = new Array(temperatures.length).fill(0);

        const stack = [];

        for (let i=0; i<temperatures.length; i++) {
            
            while (
                stack.length > 0 &&
                temperatures[i] > temperatures[stack[stack.length - 1]]
            ) {
                const previousDay = stack.pop()!;
                result[previousDay] = i - previousDay;
            }

            stack.push(i);
        }

        

        return result;
    }
}