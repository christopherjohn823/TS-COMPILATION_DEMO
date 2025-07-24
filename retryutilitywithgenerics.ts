//This is one of the complex implementations of Generics.
// Simulate a flaky async function. 

async function retry<T>(fn: () => Promise<T>, retries: number = 3): Promise<T> {
let err: any;
for (let i=0; i<retries;i++){
   try{
       return await fn();

   }catch (e){
       err = e;
   }
}
throw err;
}

async function flakyOperation(): Promise<string>{
    if (Math.random() < 0.7) {
        throw new Error ("Random failure");
    }
    return "Success";

}
// async function main (){
//     try {
//         const result = await flakyOperation();
//         console.log(result);
//      }catch (error){
//         console.log("An error occured", error);
//      }
// }

(async () => {
  try {
    const result = await retry(flakyOperation, 5);
    console.log("Operation succeeded with result:", result);
  } catch (err) {
    console.error("Operation failed after retries:", err);
  }
})();