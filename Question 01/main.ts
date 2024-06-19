// Question # 1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.

// Making an async function
async function fetchGreeting(): 
Promise<string>{
    // Returns a promise that resolves after 2 seconds
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Hello, Umm-e-Hani!")
            // Resolves with the greeting string
        }, 2000);
    })
}
fetchGreeting().then((greeting) => {
    // Logs the greeting to the console after 2 seconds
    console.log(greeting);
});