#!/usr/bin/env node
import inquirer from "inquirer";
const quiz = await inquirer.prompt([
    {
        name: "question_1",
        type: "list",
        message: "Q1.What is your teacher name?",
        choices: ["Hamza", "Ameen", "Saaba"]
    },
    {
        name: "question_2",
        type: "list",
        message: "Q2.What is your country name?",
        choices: ["Pakistan", "India", "Australia"]
    },
    {
        name: "question_3",
        type: "list",
        message: "Q3.What is your national game?",
        choices: ["Hockey", "Cricket", "Badmenton"]
    },
    {
        name: "question_4",
        type: "list",
        message: "Q4.What is your national dish?",
        choices: ["Biryani", "Qorma", "Karahi"]
    },
    {
        name: "question_5",
        type: "list",
        message: "Q5.What is your national dress?",
        choices: ["Qamez,Shalwar", "Pent,Shirt", "Kurta,Pajama"]
    }
]);
let score = 0;
switch (quiz.question_1) {
    case "Hamza":
        console.log("1.Correct!"),
            ++score;
        break;
    default:
        console.log("1.Incorrect");
}
switch (quiz.question_2) {
    case "Pakistan":
        console.log("2.Correct!"),
            ++score;
        break;
    default:
        console.log("2.Incorrect");
}
switch (quiz.question_3) {
    case "Hockey":
        console.log("3.Correct!"),
            ++score;
        break;
    default:
        console.log("3.Incorrect");
}
switch (quiz.question_4) {
    case "Biryani":
        console.log("4.Correct!"),
            ++score;
        break;
    default:
        console.log("4.Incorrect");
}
switch (quiz.question_5) {
    case "Qamez,Shalwar":
        console.log("5.Correct!"),
            ++score;
        break;
    default:
        console.log("5.Incorrect");
}
console.log(`Score:${score}`);
