class TestRunner {
  testName = "LoginTest";

  run() {
    console.log(`Running ${this.testName}`);
  }
}
const testRunner = new TestRunner(); 
testRunner.run();
const runner = new TestRunner();
setTimeout( runner.run, 2000);  // when you use callback then the 'this' property is lost, therefore use arrow function
setTimeout(() => runner.run(), 2000);