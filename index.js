const searchBar = document.querySelector('#searchBar');
const mic = searchBar.querySelector('i.fa.fa-microphone');

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
window.SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();
recognition.continuous = true;
recognition.interimResults = true;

if(recognition){
  console.log("Your Browser supports speech Recognition");
}

mic.addEventListener('click', () => {
  recognition.start();
});

// recognition.addEventListener('start', function() {
//   console.log('Speech recognition service has started');
// });
