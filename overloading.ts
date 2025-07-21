// function greet(name: string): string;
// function greet(age: number): string;
function greet(nameOrAge: string | number): string {
  if (typeof nameOrAge === 'string') {
    return `Hello, ${nameOrAge}!`;
  } else {
    return `You are ${nameOrAge} years old.`;
  }
}
console.log(greet('Alice'));
