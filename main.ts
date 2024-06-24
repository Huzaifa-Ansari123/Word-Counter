#! /usr/bin/env node

import inquirer from 'inquirer';

const answer:{
    sentence :string
}= await inquirer.prompt([{

    name: "sentence",
    type: "input",
    message: "Enter your sentence to have a word count of it."
}]);

const words = answer.sentence.trim().split(" ");
console.log(words);
console.log(`Your Sentece word count is ${words.length}`);