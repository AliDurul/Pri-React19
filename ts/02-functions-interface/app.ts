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

let flexible: any = "hello";
flexible = 123;
flexible = true;
flexible = {};
flexible = [];

// flexible.toUpperCase()

let safe: unknown = 43;
safe = "hello";

console.log(typeof safe);

// console.log(safe.toUpperCase());
if (typeof safe === "string") {
  console.log(safe.toUpperCase());
}

//* --- 15. Interface ---
// Use interface when defining object shapes, especially when you need extending/merging.

interface User {
  id: number;
  name: string;
  email: string;
}

interface Address {
  street: string;
  city: string;
  country: string;
}

//? Interfaces can Extend other interfaces

interface UserWithAddress extends User {
  address: Address;
  username: string;
}

const user1: UserWithAddress = {
  id: 1,
  name: "lee",
  email: "lee@test.com",
  address: { street: "abc", country: "qwe", city: "zxc" },
  username: "leo",
};

//? Interfaces can be Merged

interface Product {
  name: string;
  price: number;
}

interface Product {
  category: "laptops" | "phone";
}

const product1: Product = {
  name: "xzc",
  price: 2500,
  category: "phone",
};

console.log(product1);

//* --- 16. Interface and Type with function ---

interface MathOperation {
  (a: number, b: number): number;
}

const add: MathOperation = (a, b) => a + b;
console.log(add(3, 5));

type MathOp = (a: number, b: number) => number;

const divide: MathOp = (a, b) => a / b;
console.log(divide(10, 2));

//* ===== WHEN TO USE WHICH? =====
//? INTERFACE when:
//   - Defining object shapes
//   - You need declaration merging (e.g., extending a library type)
//   - You want to extend/inherit from other interfaces

//? TYPE when:
//  - Union types (string | number)
//  - Tuple types ([string, number])
//  - Mapped/Conditional/Utility types
//  - Primitive aliases (type ID = string)
//  - Intersection types (TypeA & TypeB)