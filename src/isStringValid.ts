const isStringValidBalanced = (str: string): boolean => {

    let brackets = "[]{}()"
    let stack: number[] = [];
  
    for(let bracket of str) {
      let bracketsIndex = brackets.indexOf(bracket)
  
      if(bracketsIndex % 2 === 0) {
        stack.push(bracketsIndex + 1)
      } else {
        if(stack.pop() !== bracketsIndex) {
          return false;
        }
      }
    }
    return stack.length === 0
  }

console.log(isStringValidBalanced('([])[{}]{([)]}')) // false
console.log(isStringValidBalanced('({[]})')) //true
console.log(isStringValidBalanced('({[])')) //false