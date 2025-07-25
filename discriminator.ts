type MyTestPass = {status: "pass"; duration: number};
type MyTestFail = {status: "fail"; reason: string};
type testSkip = { status: "skip"; state: string};

type TestResult = MyTestPass | MyTestFail | testSkip;

// function printResult(result: TestResult) {
//     if (result.status === "pass"){
//         console.log(`Test passed in ${result.duration}s`);       
//     } else {
//         console.log(`Test failed due to ${result.reason}`);
//     }
// }

function printResult(result: TestResult) {
 switch (result.status) {
   case "pass":
     console.log(`Test passed in ${result.duration}s`);
     break;
   case "fail":
     console.log(`Test failed: ${result.reason}`);
     break;
   case "skip":
     console.log(`Test skipped: ${result.state}`);
     break;
 }
}
printResult({ status: "pass", duration: 5 });
printResult({ status: "fail", reason: "Network error" });
printResult({ status: "skip", state: "Browser not supported" });

