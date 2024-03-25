// var inputElement = document.querySelector(
//   'input[placeholder="Type the city name"]'
// );
// inputElement.innerHTML = "HULLLU";
// var a = document.querySelector("input");
// a.value = "Holaa";

var inputvalue = document.querySelector("#cityinput");
var btn = document.querySelector("#add");
var city = document.querySelector("#cityoutput");
var descrip = document.querySelector("#temp");
var temp = document.querySelector("#temp");
var wind = document.querySelector("#wind");
apik = "57a9e33fb12a858ecfb8381842a6320d";

function convertion(val) {
  return (val - 273).toFixed(3); //toFixed function helps to give us a roundoff til a value. In this case the round off will be upto 3 digits.
}

btn.addEventListener("click", function () {
  fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=" +
      inputvalue.value +
      "&appid=" +
      apik
  )
    //   See, data is coming from API in json format, so to confirm that we are receving the data in json format we are using this res.json
    .then((res) => res.json())
    .then((data) => {
      var nameval = data["name"];
      var descrip = data["weather"]["0"]["description"];
      var temperature = data["main"]["temp"];
      var windspeed = data["wind"]["speed"];

      city.innerHTML = `Weather of <span>${nameval}<span>`;
      temp.innerHTML = `Temperature:<span>${convertion(temperature)} C<span>`;
      description.innerHTML = `Sky conditions:<span>${descrip}<span>`;
      wind.innerHTML = `Wind Speed: ${windspeed} km/h<span>`;
    })
    .catch((err) => alert("You entered wrong city"));
});
