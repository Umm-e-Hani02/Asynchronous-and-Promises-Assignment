"use strict";
// Question # 1
// Write a simple asynchronous TypeScript function fetchGreeting that returns a
// greeting message after a 2-second delay using setTimeout.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// Making an async function
function fetchGreeting() {
    return __awaiter(this, void 0, void 0, function* () {
        // Returns a promise that resolves after 2 seconds
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve("Hello, Umm-e-Hani!");
                // Resolves with the greeting string
            }, 2000);
        });
    });
}
fetchGreeting().then((greeting) => {
    // Logs the greeting to the console after 2 seconds
    console.log(greeting);
});
