//spreadoperator.ts 
//spread in arrays

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5]; // clone and add

console.log(arr2); // [1, 2, 3, 4, 5]


//Useful for merging arrays:

const a = [1, 2];
const b = [3, 4];
const c = [...a, ...b]; // [1, 2, 3, 4]
console.log(c);


//Spread in objects
const user = { name: 'Alice', age: 30 };
const updatedUser = { ...user, age: 31, city: 'Seattle' };  // here the age considered will be 31, as it is already present, that is the logic

console.log(updatedUser);
// { name: 'Alice', age: 31, city: 'Seattle' }
