// Question # 5
// Write a function executeSequentially that executes two functions fetchData and processData sequentially 
// using Promises, and logs the results in the order they are called.

async function fetchData(): Promise<string> {
    return new Promise((resolve)=>{
        // Simulates fetching data from somewhere, taking 1 second
        setTimeout(() => {
            resolve("Data fetched");
        }, 1000);
    });
}

async function processData(data:string) {
    return new Promise((resolve)=>{
        // Simulates processing the fetched data, taking 1 second
        setTimeout(()=>{
            resolve(`${data} and processed!`);
        }, 1000);
    });
}

function executeSequentially() {
    // Step 1: Fetch data
    fetchData()
    .then((fetchedData) => {
        // Step 2: Log the fetched data
        console.log(fetchedData);
        // Step 3: Process the fetched data
        return processData(fetchedData); // We use a different variable name here to avoid conflict
    })
    .then((processedData) => {
        // Step 4: Log the processed data
        console.log(processedData);
    })
    .catch((error) => {
        // Step 5: Handle any errors that happen during fetching or processing
        console.log("Error:", error);
    });
}

// Start the execution
executeSequentially();