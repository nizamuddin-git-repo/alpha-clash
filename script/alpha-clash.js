// function play(){
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }


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
    showElementById('play-ground');
    continueGame();
}



