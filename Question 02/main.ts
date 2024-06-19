// Question # 2
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.

async function simulateTask():Promise<void> {
     // Prints "Task started"
    console.log("Task started");
    await new Promise<void>((resolve)=>{
        setTimeout(() => {
            // Resolves the task after waiting for 1 second
            resolve()
        }, 1000);
        // Prints "Task completed" after 1 second wait
        console.log("Task completed");
    })
}
// Runs the simulateTask function
simulateTask()