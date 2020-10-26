var todayDate;
var cityName=[];
var image;
var lon;
var lat;
var maxDistance


function displayCityName(){
  var cityName=$(this).attr("cityName");
}
console.log(cityName)



// display the trails

//weather API key

//hiking API Key
$.ajax({
  url:"https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200952288-580b87b672e00ea3e6f7ec1e05ad0bb9",
  method: "GET"
}).then(function(response) {
console.log(response)
})

//enter zip code (saves zip to local storage) append to a button to select previous location
// displays weather (Location & Day)
// displays 6 cards (closets)
// color codes the trail ( "green" shortest distance, "yellow" < 7 mile hike, advanced > more than 7 mile hike (red))
// get elevation and apply to the trails

