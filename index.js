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
      recognition.start();
      console.log("Started recognition");
    }
    else{
      recognition.stop();
      console.log("Stopped recognition");
    }
  });
}

if(recognition){
  console.log("Your Browser supports speech Recognition");

  msg();

  recognition.onstart = function() {
    micIcon.classList.remove("fa-microphone");
    micIcon.classList.add("fa-microphone-slash");
    console.log("Rec Active");
  }

  recognition.onend = function(){
    console.log("Rec not active");
    micIcon.classList.remove("fa-microphone-slash");
    micIcon.classList.add("fa-microphone");
  }
}
