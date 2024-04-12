// function play () {
//    const homeSection = document.getElementById('home');
//    homeSection.classList.add('hidden');

//    const playGround = document.getElementById('play-ground');
//    playGround.classList.remove('hidden');
// }
function continueGame () {
   const alphabet = getARandomAlphabet ();
   console.log( 'your random alphabet', alphabet);

   const currentAlphabet = document.getElementById('show-alphabet');
   currentAlphabet.innerText = alphabet;

   setBackgroundColorById(alphabet);
}

function play() {
   hideElementById('home');
   showElementById('play-ground');
   continueGame();
}