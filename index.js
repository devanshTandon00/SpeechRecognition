const searchBar = document.querySelector('#searchBar');
const mic = document.querySelector('i.fa.fa-microphone');
const micIcon = document.querySelector('i');
const textBox = document.getElementsByTagName('input')[0];
const para = document.getElementsByTagName('p')[0];
const info = document.querySelector('.info');

window.SpeechRecognition = window.webkitSpeechRecognition || window.SpeechRecognition;
window.SpeechRecognitionEvent = window.SpeechRecognitionEvent || window.webkitSpeechRecognitionEvent;

const recognition = new SpeechRecognition();

// results are continuous
recognition.continuous = true;

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

const list = (event) => {
  const resultIndex = event.resultIndex;

  // const p = document.createElement('p');
  const li = document.createElement('li');
  const list = document.querySelector('#demo');
  const text = document.createTextNode(event.results[resultIndex][0].transcript);


  li.appendChild(text);
  list.appendChild(li);
  info.appendChild(list);


  //
  // p.appendChild(text);
  // info.appendChild(p);
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
    micIcon.classList.remove("fa-microphone-slash");
    micIcon.classList.add("fa-microphone");
    console.log("Rec not active");
    textBox.focus();
  }

  recognition.onresult = function(event){
    const resultIndex = event.resultIndex;
    const transcript = event.results[resultIndex][0].transcript;

    if(transcript.toLowerCase().trim() === "stop recording"){
      recognition.stop();
    }
    else if(!textBox.value){
      textBox.value = transcript;
    }
    else{
      if(transcript.toLowerCase().trim() === "go"){
        searchBar.submit();
      }
      else if(transcript.toLowerCase().trim() === "reset"){
        textBox.value = "";
        textBox.focus();
      }
      else{
        textBox.value = transcript;
      }
    }
    list(event);
  }
}
