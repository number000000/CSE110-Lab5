// explore.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  getVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = getVoiceList;
  }
}

function getVoiceList(){
  const voices = speechSynthesis.getVoices();
  for(let i = 0; i < voices.length; i++){
    let option = document.createElement('option');
    option.textContent = `${voices[i].name} (${voices[i].lang})`;

    if (voices[i].default) {
      option.textContent += ' — DEFAULT';
    }

    option.setAttribute('data-lang', voices[i].lang);
    option.setAttribute('data-name', voices[i].name);
    document.getElementById("voice-select").appendChild(option);
  }
}