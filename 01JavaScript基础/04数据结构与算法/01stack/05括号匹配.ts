import ArrayStack from "./01stack(Array)";
function isValid(str: string): boolean {
  const stack = new ArrayStack<string>();
  for (const s of str) {
    switch (s) {
      case "(":
        stack.push(")");
        break;
      case "{":
        stack.push("}");
        break;
      case "[":
        stack.push("]");
        break;
      default:
        if (s !== stack.pop()) return false;
        break;
    }
  }
  return stack.isEmpty();
}
console.log(isValid("(()){}[]"));
console.log(isValid("((){}["));
console.log(isValid("((())){}[]"));
console.log(isValid(")((())){}[]("));
