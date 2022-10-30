// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  var talk_button = document.querySelector('button'); //object for the play button
  var text_box = document.getElementById('text-to-speak'); //object for the text input
  var select_list = document.getElementById('voice-select'); //object for the drop-down list
  var face = document.querySelector('img'); //object for the smiling face
  var voices = []; //voice list that will be populated

  //populate a list of voice available to choose
  function getVoiceList(){
    voices = speechSynthesis.getVoices();
    for(let i = 0; i < voices.length; i++){
      let option = document.createElement('option');
      option.textContent = `${voices[i].name} (${voices[i].lang})`;
  
      if (voices[i].default) {
        option.textContent += ' — DEFAULT';
      }
  
      option.setAttribute('data-lang', voices[i].lang);
      option.setAttribute('data-name', voices[i].name);
      select_list.appendChild(option);
    }
  }

  getVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = getVoiceList;
  }

  //let it speak
  talk_button.addEventListener('click', function(){
    var text_to_talk = new SpeechSynthesisUtterance(text_box.value);

    //find the voice
    for(let i = 0; i < voices.length; i++){
      if(voices[i].name == select_list.selectedOptions[0].getAttribute('data-name')){
        text_to_talk.voice = voices[i];
      }
    }

    speechSynthesis.speak(text_to_talk);

    //set correct face images
    text_to_talk.addEventListener('start', function(){
      face.src = "assets/images/smiling-open.png";
    })
    text_to_talk.addEventListener('end', function(){
      face.src = "assets/images/smiling.png";
    })
  })
}