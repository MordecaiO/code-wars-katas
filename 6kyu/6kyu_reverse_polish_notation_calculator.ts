
/*
Your job is to create a calculator which evaluates expressions in Reverse Polish notation.

For example expression 5 1 2 + 4 * + 3 - (which is equivalent to 5 + ((1 + 2) * 4) - 3 in normal notation) should evaluate to 14.

For your convenience, the input is formatted such that a space is provided between every token.

Empty expression should evaluate to 0.

Valid operations are +, -, *, /.

You may assume that there won't be exceptional situations (like stack underflow or division by zero).
*/

/* Plan
- if there are no numbers don't do anything
- implement a stack with a last in first out logic 
- travel from left to right, when you reach an operator apply it to the previous two numbers 
- now replace the two numbers with the result 
- continue travelling left and repeating until you are left with one number 
- return this number
*/
// [1,2 ] " 1 2 + 2 - 4 6 /"

export function calc(expr: string): number {
  if (expr.length === 0) return 0; 
  let stack : number[] = []; 
  let strArr = expr.split(" ")
  const operators : string[] = ["+", "-", "/", "*"]
    strArr.forEach((item: string)=> {
      // add numbers to stack
      let isOperator : number = operators.findIndex(x => x == item)
      if(isOperator == -1){
        stack.push(Number(item))
      } else {
        // when we come accross an operator
        if(stack.length >= 2){
          let lastNum: number = stack[stack.length-1] ,secondLastNum: number = stack[stack.length-2]; 
          let newNum : number = 0; 
          switch(item){
            case "*": 
            newNum = secondLastNum * lastNum;
            break; 
            case "/": 
            newNum = secondLastNum / lastNum;
            break; 
             case "-": 
            newNum = secondLastNum - lastNum;
            break; 
             case "+": 
            newNum = secondLastNum + lastNum;
            break; 
        }
        stack.splice(stack.length-2, 2, newNum)
        } 
      }
    })
  return stack[0]
}
