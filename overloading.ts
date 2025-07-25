// function greet(name: string): string;
// function greet(age: number): string;
function greetss(nameOrAge: string | number): string {
  if (typeof nameOrAge === 'string') {
    return `Hello, ${nameOrAge}!`;
  } else {
    return `You are ${nameOrAge} years old.`;
  }
}
//console.log(greet('Alice'));
console.log(greetss(30));