// expose.js
window.addEventListener('DOMContentLoaded', init);

function init() {
  var audio = document.querySelector("audio"); //object of the audio
  var horn_select = document.getElementById("horn-select"); //object of the drop-down menu
  var horn_img = document.querySelector("img");
  horn_select.addEventListener('change', function() {
    switch(horn_select.value){
      case "air-horn":
        //displaying the correct image
        horn_img.src = "assets/images/air-horn.svg";
        //loading the correct audio file
        audio.src = "assets/audio/air-horn.mp3";
        break;
      case "car-horn":
        horn_img.src = "assets/images/car-horn.svg";
        //loading the correct audio file
        audio.src = "assets/audio/car-horn.mp3";
        break;
      case "party-horn":
        horn_img.src = "assets/images/party-horn.svg";
        //loading the correct audio file
        audio.src = "assets/audio/party-horn.mp3";
        break;
      default:
        break;
    }
  })

  var volume_control = document.getElementById("volume-controls"); //object of the volume wrapper
  var volume_image = volume_control.querySelector("img"); //object the image of the sound icon
  var volume_value = volume_control.querySelector("input"); //object the volume slider
  volume_value.addEventListener('input', function(){
    audio.volume = (Number)(volume_value.value) / 100; //set volume
    if(volume_value.value > 0 && volume_value.value < 33)
      //display the first level volume level icon
      volume_image.src = "assets/icons/volume-level-1.svg";
    if(volume_value.value > 32 && volume_value.value < 67)
      //display the second level volume level icon
      volume_image.src = "assets/icons/volume-level-2.svg";
    if(volume_value.value > 66)
      //display the third level volume level icon
      volume_image.src = "assets/icons/volume-level-3.svg";
    if(volume_value.value == 0)
      //display the mute icon
      volume_image.src = "assets/icons/volume-level-0.svg";
  })

  //play sound
  const jsConfetti = new JSConfetti();
  var play_button = document.querySelector("button");
  play_button.addEventListener('click', function(){
    audio.play();
    if(horn_select.value == "party-horn"){
      jsConfetti.addConfetti();
    }
  })
}