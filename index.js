const searchBar = document.querySelector('#searchBar');
const mic = document.querySelector('i.fa.fa-microphone');
const textBox = document.querySelector('textBox');
const micIcon = document.querySelector('i');

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
window.SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();

// results are continuous
recognition.continuous = true;

// results are shown on screen side by side as user says things
recognition.interimResults = true;

const msg = () => {
  mic.addEventListener('click', () => {
    // the classList will output fa at position 0 and fa-microphone at position 1.
    if(micIcon.classList.contains("fa-microphone")){
      micIcon.classList.remove("fa-microphone");
      micIcon.classList.add("fa-microphone-slash");
      recognition.start();
      console.log("Mic is clicked");
    }
    else{

    }
  });
}


if(recognition){
  console.log("Your Browser supports speech Recognition");
  msg();
}

// mic.

// recognition.addEventListener('start', function() {
//   console.log('Speech recognition service has started');
// });
