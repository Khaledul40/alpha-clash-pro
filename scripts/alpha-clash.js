// function play(){
//    // step one: hide the home screen. to hide the sceen, add class hidden to the home section.
//    const homeSection = document.getElementById('home-screen');
//    homeSection.classList.add('hidden');

//    // show play now section
//    const playgroundSection = document.getElementById('play-ground');
//    playgroundSection.classList.remove('hidden');
// }

function continueGame(){
    // step 1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('Your random alphabet', alphabet);

    // set randomly generated alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    // ste background color

    setBackgroundColorById(alphabet);

}

function play(){
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}