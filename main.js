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



///////////////////// STRINGER /////////////////////

//define the empty array
userSyllables = [];

//add-letter function
function addSyllable(){
    let syllable = document.getElementById("add-syllable-input").value; //get user input
    userSyllables.push(syllable); //push input in array
    document.getElementById("add-syllable-input").value = ""; //clear input
    //console.log(userSyllable); //print array in console

    //display list of syllables on screen
    let syllableList = document.getElementById("syllable-list"); //get the li element
    syllableList.innerHTML = userSyllables.join("<li>"); //put the syllable in a new li element
    console.log(userSyllables);
}


//shuffle and pick syllables
function getSyllables(){
    //choose amount of syllables
    let amount = document.getElementById("amount-syllable-input").value;
    console.log(amount);
    //define empty array for word
    newWord = []; 
    //do shuffling and create word
    for(i=0; i<amount; i++){
    randomSyllable = userSyllables[Math.floor(Math.random() * userSyllables.length)];
    newWord.push(randomSyllable);
    }
    console.log(newWord);
    let wordElement = document.getElementById("new-word-item"); //get the li element
    wordElement.innerHTML = newWord.join(""); //put the word in a li element without commas
}





