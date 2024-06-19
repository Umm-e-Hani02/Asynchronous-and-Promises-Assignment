"use strict";
// Question # 5
// Write a function executeSequentially that executes two functions fetchData and processData sequentially 
// using Promises, and logs the results in the order they are called.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function fetchData() {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            // Simulates fetching data from somewhere, taking 1 second
            setTimeout(() => {
                resolve("Data fetched");
            }, 1000);
        });
    });
}
function processData(data) {
    return __awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            // Simulates processing the fetched data, taking 1 second
            setTimeout(() => {
                resolve(`${data} and processed!`);
            }, 1000);
        });
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
