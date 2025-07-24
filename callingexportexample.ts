// // named export and import

// import {add, PI} from './exportexample';
// console.log(add(2,3));
// console.log(PI);

// //Exporting with as Rename

// import { multiply as mul } from './exportexample';

// console.log(mul(4, 5)); // Output: 20

//example of default import
import add, {PI} from './exportexample';
console.log(add(2,3));
console.log(PI);

