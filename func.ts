function findEven(a: number): number {
  let even: number = a / 2;
    if (even === 0){
      console.log("Number is even")
    }
    else 
      console.log("Number is odd");
    return even;
}

findEven(9);