// Named export and import

// export function add(a: number, b: number): number {
//   return a + b;
// }

// export const PI = 3.14;


// example of rename as-

// export function multiply(a: number, b: number): number {
//   return a * b;
// }

//example of default import
export default function add(a: number, b: number): number { // since default is used so we don't need to use {}
  return a + b;
}

export const PI = 3.14;  // default not used so we need to use {} wherever it is called. check callingexportexample.ts

