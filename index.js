
let guess_count = 0;
let random_number = Math.floor(Math.random() * 100 + 1);
console.log(random_number);
document.querySelector("#check_it").addEventListener("click", checkNumber);
document.querySelector("#nr_game").addEventListener("keyup", function (event) {
    if (event.keyCode === 13)
        checkNumber()
});
function checkNumber() {
    // // This is for input again erreichen
    let userInputElement = document.querySelector("#nr_game");
    let answerLabelElement = document.querySelector("#answer");
    let guessLabelElement = document.querySelector("#count_it");
    if (userInputElement.value == random_number) {
        guess_count=0;
        alert("You are the winner!"+ guess_count);
        const chocie = confirm("Game again?")
        
        if(chocie){
          guess_count=0;
          random_number = Math.floor(Math.random() * 100 + 1);
          answerLabelElement.innerText="";
        } else {
          alert ("thanks for player");
          answerLabelElement.innerText="best guess time: "+ guess_count;
          guessLabelElement.innerText="";
        }
        

    } else if (userInputElement.value == "") {
        answerLabelElement.innerText = "Enter a number!";
    } else if (userInputElement.value > random_number) {
        guess_count++;
        document.querySelector("#count_it").innerText = `Guess count is: ${guess_count}`;
        answerLabelElement.innerText = "Try a smaller number!";
    } else if (userInputElement.value < random_number) {
        guess_count++;
        document.querySelector("#count_it").innerText = `Guess count is: ${guess_count}`;
        answerLabelElement.innerText = "Try a higher number!";
    } else if (isNaN(userInputElement.value)) {
        answerLabelElement.innerText = "It's not a number!";
    }
    userInputElement.focus();
    userInputElement.value = "";
}