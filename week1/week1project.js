// Part 1: MadLibs
// values passed in are stored in the parameters (noun, verb, adjective)
function madLibs(n, v, a) {
    // create a string using concatentation and the paramters
    let message = "The " + a + " " + n + " " + v + ". ";
    return message;
}

let noun = prompt("Please input a noun.");
let verb = prompt("Please enter a verb.");
let adjective = prompt("Please enter an adjective.");

// Call function and pass the variables from the user input as the arguments to the function
// The value of the arguments will be stored as the parameter of the function
// The function will return a string
// Store the returned string inside a variable and print the variable
let result = madLibs(noun, verb, adjective);
console.log(result);


// Part 2: Even odd checker
function evenOddCheck(number) {
    // mod returns the remainder. If the remainder of the number/2 is 0 then it must be even
    if (number % 2 === 0) {
        return "Even!";
    }
    // if the remainder is not 0 (the if condition evaluated to false), then the number must be odd
    else {
        return "Odd!";
    }
}
// Call the function and store the returned string in a variable
// Print the variable
// note that my variable name is not the same as the previous variable name (result)
// You cannot declare two or more variables with the same name - this will throw an error
let result2 = evenOddCheck(1);
console.log(result2);

