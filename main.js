///////////////////// ADDER /////////////////////

//define the empty array
userAlphabet = [];

//add-letter function
function addLetter(){
    let letter = document.getElementById("add-letter-input").value; //get user input
    userAlphabet.push(letter); //push input in array
    document.getElementById("add-letter-input").value = ""; //clear input
    console.log(userAlphabet); //print array in console

    let listElement = document.getElementById("ab-list"); //get the li element
    listElement.innerHTML = userAlphabet.join("<li>"); //put the letter in a new li element

}


///////////////////// SHUFFLER /////////////////////

//get the button
let shuffleBtn = document.getElementById("shuffle-btn");

//get the p element
let resultOne = document.getElementById("letter");

//determine the alphabet array
alphabet = ["a", "b", "t͡ʃ", "d", "e", "f", "g", "ɦ", "i", "dʒ", "k", "l", "m", "ŋ", "o",
                "p", "r", "s", "ʃ", "t", "u", "v", "z" ];

//make the math function
function getIndexNumber(min, max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let resultOne = Math.floor(step2) + min;
    return resultOne;
}

//make the button listen for the click and do the shuffling
shuffleBtn.addEventListener("click", () => {

    /*
    //shuffle the ante-alphabet
    let index = getIndexNumber(0, alphabet.length-1); //it is -1 because arrays start counting from 0
    resultOne.innerText = alphabet[index];
    */

    
    //shuffle the user's alphabet:
    let index = getIndexNumber(0, userAlphabet.length-1); 
    resultOne.innerText = userAlphabet[index];
    
});