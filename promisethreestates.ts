function simulateAsync(state: "success" | "fail"): Promise<string> {
  return new Promise((resolve, reject) => {
    console.log("▶️ Promise is in PENDING state...");

    setTimeout(() => {
      if (state === "success") {
        resolve("✅ Promise is FULFILLED: Data loaded successfully!");
      } else {
        reject("❌ Promise is REJECTED: Something went wrong.");
      }
    }, 2000); // Simulating delay
  });
}

async function handleAsync(state: "success" | "fail") {
  try {
    const result = await simulateAsync(state);
    console.log(result); // Runs when fulfilled
  } catch (error) {
    console.error(error); // Runs when rejected
  }
}

// 👇 Try both success and failure cases
handleAsync("success"); // Will resolve after 2 seconds
//handleAsync("fail");    // Will reject after 2 seconds
