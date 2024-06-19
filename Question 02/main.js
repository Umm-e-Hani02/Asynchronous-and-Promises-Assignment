"use strict";
// Question # 2
// Write a function simulateTask that simulates a task by logging "Task started",
// waits for 1 second, and then logs "Task completed". Use setTimeout for the delay.
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function simulateTask() {
    return __awaiter(this, void 0, void 0, function* () {
        // Prints "Task started"
        console.log("Task started");
        yield new Promise((resolve) => {
            setTimeout(() => {
                // Resolves the task after waiting for 1 second
                resolve();
            }, 1000);
            // Prints "Task completed" after 1 second wait
            console.log("Task completed");
        });
    });
}
// Runs the simulateTask function
simulateTask();
