function greet(name: string) {  // "noUnusedLocals": true,
 const test = "string";         // "noUnusedParameters": true
  console.log("Hello ");
}

greet("null"); // Error with strict: true — null is not assignable to string

