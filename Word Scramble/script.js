const  wordText = document.querySelector(".word"),
hintText = document.querySelector('.hint span'),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh-word"),
checkBtn = document.querySelector(".check-word");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--; // decreame maxTime by -1
            return timeText.innerText = maxTime;
        }
        clearInterval(timer);
        alert(`Time off! ${correctWord.toUpperCase()} was the correct word`);
        initGame(); // calling the initGame function, so the game restart
    }, 1000);
}

const initGame = () => {
        initTimer(30); // calling initimer functionwith passing 30 as maxTime value

    let randomObj = words[Math.floor(Math.random() * words.length)]; // getting randow object from words
   // split() method splits a string into an array of substring
    let wordArray = randomObj.word.split(""); // spllitting each letter of randowm word
    for(let i=wordArray.length -1; i>0; i--){
        let j = Math.floor(Math.random() * (i+1)); // getting randow number 
        // shuffling and swiping wordArray letters randoms
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]]; 
    }
    
// this is the exact code for the swiping array
//    for(let i = wordArray.length -1; i>0; i--){
//     let j = Math.floor(Math.random() * (i +1));
//     let temp = wordArray[i];
//     wordArray[i] = wordArray[j];
//     wordArray[j] = temp;
//    }

    wordText.innerText = wordArray.join("");// passing shuffled word as word text 
    hintText.innerText = randomObj.hint; // passing random object hint as hint text
    correctWord = randomObj.word.toLowerCase(); // passing random word to correctWord
    inputField.value = ""; // making input field empty
    inputField.setAttribute("maxlength", correctWord.length); // setting input maxlength attr value to word length 
    // console.log(randomObj);
}

initGame();

const checkWord = () => {
    let userWord = inputField.value.toLocaleLowerCase(); // getting user value 
    if(!userWord) return alert("Please enter a word check");// if user didn't enter anything
    if(userWord !== correctWord) return alert(`Oops! ${userWord} is not a correct word`); // if user word doesn't matched with the correct word
     alert(`Congrats! ${userWord.toUpperCase()} is a correct word`); // if above two if conditions failed then show congrats alert to the user saying the word is correct
    // console.log(userWord);
    initGame();
}

refreshBtn.addEventListener("click", initGame);
checkBtn.addEventListener("click", checkWord);




















