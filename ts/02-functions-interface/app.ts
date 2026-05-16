//* --- 11. Functions ---
// Always type parameters and return values for clarity.

function topla(a: number, b: number): number {
  return a + b;
}

console.log(topla(2, 3));

// arrow function
// void - hic bir return islemi yapmiyor

const greet = (name: string, title: string = "Mr"): string => {
  return `hello, ${title} ${name}`;
};

console.log(greet("lee"));

//* --- 12. Void & Never ---
// 'void' — function returns nothing.
// 'never' — function never returns (throws or infinite loop).

function logMsg(msg: string) {
  console.log(msg);
}

function errFn(): never {
  throw new Error("custom error");
}

//* --- 13. Any vs Unknown ---
// 'any' disables type checking — avoid when possible.
// 'unknown' is the safe alternative — requires a type check before use.

let flexible: any = 'hello'
flexible = 123
flexible = true
flexible = {}
flexible = []

