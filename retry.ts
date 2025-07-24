// async function retry<T>(
//    fn: () => Promise<T>,
//    retries: number = 3
// ): Promise<T> {
// let err: any;
// for (let i=0; i<retries;i++){
//    try{
//        return await fn();
//    }catch (e){
//        err = e;
//    }
// }
// throw err;
// }

// async function retry<T>(fn: () => Promise<T>, retries: number): Promise<T> {
//     let lastError: unknown;
//     for (let attempt = 1; attempt <= retries; attempt++) {
//         try {
//             return await fn();
//         } catch (err) {
//             lastError = err;
//             console.warn(`Attempt ${attempt} failed. Retrying...`);
//         }
//     }
//     throw lastError;
// }
