// extracting values from array

// const numbers = [1, 2, 3];

// const [a, b, c, d] = numbers;

// console.log(a); // 1
// console.log(b); // 2
// console.log(c); // 
// console.log(d); // 

// extracting values propertoes from objects
const user1 = {
  name1: 'Alice',
  age: 30,
  location1: 'NYC',
  job: '<fill in the blank>'
};

const { name1, location1 } = user1;

console.log(name1);     // 'Alice'
console.log(location1); // 'NYC'


//You can rename the property while destructuring:

const { name1: userName } = user1; // name1 is renamed as userName
console.log(userName); // 'Alice'

//You can also set default values:

const { job = 'Engineer' } = user1;  // although default value is Engineer but it willm take the value from the object
console.log(job); // 'Engineer'
