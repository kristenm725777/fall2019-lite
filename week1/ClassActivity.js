// slide 41 of week1
/*
Part 1: 
Declare three variables: one for your name, one for your partner’s, and something the two of you both have in common. 
Write a function that takes two parameters (the names) which returns a string such as “John and Kendra both listen to Coldplay.”
Call the function inside console.log() with the three variables you created passed as arguments.
Part 2: 
Change each variable to call the user input function.
Try searching the Internet for this function! Example search: “Javascript user input function”
Find a pair of students you haven’t met yet and let them try your program.
*/

function message(name1, name2, similarity) {
    return name1 + " and " + name2 + " both like " + similarity;
}

let name = "Theodore";
let partnerName = "Samantha"
let common = "music";
message(name.partnerName, common);

// part two:
name = prompt("What's your name?");
partnerName = prompt("What's your partner's name?");
common = prompt("What do you both like?");
message(name, partnerName, common);
