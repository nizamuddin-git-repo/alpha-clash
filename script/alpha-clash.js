// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }


function handleKeybordKeyUpEvent(event){
    const playerPressed = event.key;
    console.log('player pressed', playerPressed);
    // get tha key player expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLocaleLowerCase();
    console.log(playerPressed, currentAlphabet);
    // chek  right or wrong key pressed
    if(playerPressed === expectedAlphabet){
        console.log('you get a point');

        const currentScore = getTextElementValueById('current-score');
        const updatedScore = currentScore + 1;
        setTextElementValueById('current-score', updatedScore);



        // ------------------------------------
        // update score:
        // get tha current score
        // const currentScoreElement = document.getElementById('current-score');
        // const currentScoreText = currentScoreElement.innerText;
        // const currentScore = parseInt(currentScoreText);
        // console.log(currentScore);

        // // 2  .incrase tha score by 1
        // const newScore = currentScore + 1;


        // // 3. show tha score by 1
        // currentScoreElement.innerText = newScore;

        // start a new round
        removeBackgroundColorById(expectedAlphabet)
        continueGame();
    }
    else{
        console.log('you missed. you lost a life');

        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife - 1;
        setTextElementValueById('current-life', updatedLife);

        if(updatedLife === 0){
            gameOver()
        }



        //--------------------------------
        // stap- 1 : get current life numbar
        // const currentLifeElement = document.getElementById('current-life')
        // const currentLifeText = currentLifeElement.innerText;
        // const currentLife = parseInt(currentLifeText);
        // // stap -2 reduce tha life count 
        // const newLife = currentLife - 1;
        // // step -3 : display tha update life count
        // currentLifeElement.innerText = newLife;
    }
}

document.addEventListener('keyup', handleKeybordKeyUpEvent)
function continueGame() {
    // stap -1 generate a random alphabet
    const alphabet = getArandomAlphabet();
    console.log('your random alphabet', alphabet);
    // set randomly genetated alphabet to tha screen (sho it)
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    // set background color
    setBackgroundColorById(alphabet);

}

function play (){
    hideElementById('home-screen');
    hideElementById('final-score')
    showElementById('play-ground');
    continueGame();
}

function gameOver(){
    hideElementById('play-ground');
    showElementById('final-score');
}

