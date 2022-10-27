// expose.js
window.addEventListener('DOMContentLoaded', init);


function init() {

  var horn_select = document.getElementById("horn-select");
  horn_select.addEventListener('change', function() {
    switch(horn_select.value){
      case "air-horn":
        //displaying the correct image
        var air_horn = document.querySelector("img");
        air_horn.src = "assets/images/air-horn.svg";
        //loading the correct audio file
        air_horn = document.querySelector("audio");
        air_horn.src = "assets/audio/air-horn.mp3";
        air_horn.play(); //FIXME
        break;
      case "car-horn":
        var car_horn = document.querySelector("img");
        car_horn.src = "assets/images/car-horn.svg";
        //loading the correct audio file
        car_horn = document.querySelector("audio");
        car_horn.src = "assets/audio/car-horn.mp3";
        car_horn.play(); //FIXME
        break;
      case "party-horn":
        var party_horn = document.querySelector("img");
        party_horn.src = "assets/images/party-horn.svg";
        //loading the correct audio file
        party_horn = document.querySelector("audio");
        party_horn.src = "assets/audio/party-horn.mp3";
        party_horn.play(); //FIXME
        break;
    }
  })

  //play sound
  /*var sound_player = document.querySelector(button);
  sound_player.addEventListener('click', function(){
    
  })*/
}