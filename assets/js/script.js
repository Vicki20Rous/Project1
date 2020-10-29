$(document).ready(function () {


  var todayDate;
  var cityName = [];
  var image;
  var maxDistance;


  function getWeather() {
    var city = document.getElementById("search").value;
    var units = document.getElementById("units").value;
    fetch("http://api.weatherstack.com/current?access_key=e063281f4936be92105758e9da02670d&query=" + city
      + "&units=" + units)
      .then(a => a.json())
      .then(response => {
        console.log(response)
        
        document.getElementById("image").src = response.current.weather_icon[0];
        document.getElementById("output").innerHTML = "<h1>" + response.current.weather_description[0] + "</h1>Temperature:" + response.current.current.temperature + "<br>Feels like" + response.current.feelslike + "<br>UV index:" + response.current.uv_index + "<br>Humidity:" + response.current.humidity + "<br>Cloud cover:" + reponse.current.cloudcover;
        
      });
  }

  $("#weatherbutton").on("click", getWeather);


  //hiking API Key
function trailData(lat,lon) {
  // var lat = 40.0274;
  // var lon = -105.2519;

  $.ajax({
    //url:"https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200952288-580b87b672e00ea3e6f7ec1e05ad0bb9",
    url: "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lon + "&maxDistance=10&key=200952288-580b87b672e00ea3e6f7ec1e05ad0bb9",
    method: "GET"
  }).then(function (response) {
    console.log(response)
const trails= response.trails.map(function(trail){


const trailTemplate = `
<div class="card">
<div class="card-image">
  <img src="${trail.imgSqSmall}" width="200" height="200">
  <span class="card-title">${trail.name}</span>
</div>
<div class="card-content">
  <p>Difficulty: ${trail.difficulty}</p>
  <p>Rating: ${trail.stars}</p>
</div>
<div class="card-action">
  <a href="${trail.url}" target="_blank">Go to the trail site</a>
</div>
</div>
`
return trailTemplate;
})
$("#trail-cards").html(trails.join(""))
  })
}
// trailData();

//enter zip code (saves zip to local storage) append to a button to select previous location
// displays weather (Location & Day)
// displays 6 cards (closets)
// color codes the trail ( "green" shortest distance, "yellow" < 7 mile hike, advanced > more than 7 mile hike (red))
// get elevation and apply to the trails


//$("#button").on("click", async function(event){
  //var userinput= $("input").val()
  //const currentWeatherResponse= await currentWeather(userinput)
