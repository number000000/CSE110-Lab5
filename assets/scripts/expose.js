// expose.js
window.addEventListener('DOMContentLoaded', init);


function init() {
  const horn_select = document.getElementById("horn-select");
  horn_select.addEventListener('change', (event) => {
    switch(horn_select.value){
      case "air-horn":
        console.log("1"); //FIXME
        var air_horn = document.querySelector("img");
        air_horn.src = 'assets/images/air-horn.svg';
        /*var air_horn = new Image();
        air_horn.src = 'assets/images/air-horn.svg';
        air_horn.onload = function () {
          document.querySelector("img").setAttribute('src', this.src);
        };*/
        break;
      case "car-horn":
        console.log("2"); //FIXME
        var image = new Image();
        image.src = 'assets/images/car-horn.svg';
        image.onload = function () {
          document.querySelector("img").setAttribute('src', this.src);
        };
        break;
      case "party-horn":
        console.log("3"); //FIXME
        var image = new Image();
        image.src = 'assets/images/party-horn.svg';
        image.onload = function () {
          document.querySelector("img").setAttribute('src', this.src);
        };
        break;
    }
  })
}