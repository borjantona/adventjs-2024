function fixPackages(packages: string): string {
  let stack: string[] = [];

  for (let char of packages) {
    if (char === ")") {
      let temp = "";
      while (stack.length && stack[stack.length - 1] !== "(") {
        temp += stack.pop();
      }
      stack.pop();
      stack.push(...temp);
    } else {
      stack.push(char);
    }
  }

  return stack.join("");
}
