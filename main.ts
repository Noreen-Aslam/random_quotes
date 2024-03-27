// Importing the 'inquirer' module for CLI prompts
import inquirer from "inquirer";

// Array containing famous quotations
const quotations: string[] = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "In the end, it's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
    "Life is what happens when you're busy making other plans. - John Lennon",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
    "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
    "Life is like riding a bicycle. To keep your balance, you must keep moving. - Albert Einstein",
    "The only true wisdom is in knowing you know nothing. - Socrates",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The best way to predict the future is to create it. - Peter Drucker",
    "Don't cry because it's over, smile because it happened. - Dr. Seuss"
];

// Function to get a random quote from the 'quotations' array
function getRandomQuote(): string {
    const randomIndex = Math.floor(Math.random() * quotations.length); // Generating a random index
    return quotations[randomIndex]; // Returning the quote at the random index
}

// Main function to prompt the user to generate a random quote
async function main() {
    const answer = await inquirer.prompt([
        {
            type: "input",
            name: "generate",
            message: "Press enter to generate a random quote"
        },
    ]);
    if (answer.generate === "") {
        console.log('\nRandom quote:');
        console.log(getRandomQuote()); // Displaying the random quote
    } else {
        console.log("Invalid input. Please press enter to generate a random quote");
    }
}

// Calling the main function to start the program
main();
