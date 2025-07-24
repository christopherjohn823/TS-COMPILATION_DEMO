let value: string | number;
value = 123;  // OK
value = 'Hello World';  // OK
//value = true; // Error: boolean not allowed

function greets (user: string | number): string {
    if (typeof user === 'string'){
        return `Hello, ${user}!`;
    } else {
        return `You are ${user} years old!`;
    }
}
console.log(greets("Alice"));
console.log(greets(23));


// what not to do
function riskyPrint(data: string | number) {
  // console.log(data.toUpperCase()); ❌ Error: number may not have toUpperCase
  if (typeof data === 'string') {
    console.log(data.toUpperCase()); // ✅ safe
  }
}

