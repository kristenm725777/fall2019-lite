let feeling = prompt("Are you energized or tired?");
let itsGoTime = ["dance", "jump", "swim"];
let waysToChill = ["sleep", "nap"];
if (feeling === "tired" || feeling === "Tired") {
    let random = Math.floor(Math.random() * waysToChill.length - 1);
    let message = waysToChill[random];
    console.log(message);
}
else if (feeling === "energized" || feeling === "Energized") {
    // Math.random()*itsGoTime.length-1 gives you a random decimal value from 0 to the last index of the array
    // Math.floor converts the decimal number to an integer(whole number)
    let random = Math.floor(Math.random() * itsGoTime.length - 1);
    let message = itsGoTime[random];
    console.log(message);
}
else {
    console.log("Input error");
}