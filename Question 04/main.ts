// Question # 4
// Write a function fetchWithError that returns a Promise. It should randomly either
// resolve with "Data fetched successfully!" or reject with "Data fetch failed!" after a
// delay of 1 second. Handle the rejection using .catch

async function fetchWithError():Promise<string>{
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            if(Math.random() < 0.5){
                 // Resolve with success message
                resolve("Data fetched successfully!");
            }else{
                // Reject with failure message
                reject("Data fetch failed!");
            }
        }, 1000);
    });
};

fetchWithError().then((value)=>{
    // Log the success message
    console.log(value);
}).catch((error)=>{
    // Log the error message if fetchWithError() fails
    console.log(error);
})

