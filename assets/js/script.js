$(document).ready(function(){


var todayDate;
var cityName=[];
var image;
var maxDistance;


function getWeather(){
  var city = document.getElementById("search").value;
  var units = document.getElementById("units").value;
  fetch("http://api.weatherstack.com/current?access__key=e063281f4936be92105758e9da02670d&query="+city
  +"&units="+units)
  .then(a =>a.json())
  .then(response =>{
  document.getElementById("image").src=response.current.weather_icon[0];
  document.getElementById("output").innerHTML="<h1>"+response.current.weather_description[0]+"</h1>Temperature:"+response.current.current.temperature+"<br>Feels like"+response.current.feelslike+"<br>UV index:"+response.current.uv_index+"<br>Humidity:"+response.current.humidity+"<br>Cloud cover:"+reponse.current.cloudcover;
  console.log(getWeather)
  });  
  }
   



//hiking API Key
function trailData() {
  var lat = 40.0274;
  var lon = -105.2519;

$.ajax({
 url:"https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lon + "&maxDistance=10&key=200952288-580b87b672e00ea3e6f7ec1e05ad0bb9",
  method: "GET"
}).then(function(response) {
console.log(response)
})
}
  trailData ();

//enter zip code (saves zip to local storage) append to a button to select previous location
// displays weather (Location & Day)
// displays 6 cards (closets)
// color codes the trail ( "green" shortest distance, "yellow" < 7 mile hike, advanced > more than 7 mile hike (red))
// get elevation and apply to the trails


$("button").on("click", function(){
  //var userinput= $("input").val()
  //renderDayCard(userinput)
})
})