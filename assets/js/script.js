<<<<<<< Updated upstream

=======
>>>>>>> Stashed changes
var todayDate;
var cityName=[];
var image;
var maxDistance;


function displayCityName(){
  var cityName=$(this).attr("cityName");
}
console.log(cityName)



// display the trails
<<<<<<< Updated upstream
//const API_KEY ="e063281f4936be92105758e9da02670d"

var currentForecast; 
var currentUv;
var currentPrecipitation;

$.ajax({
  url: 'https://api.weatherstack.com/current',
  data: {
    access_key:'e063281f4936be92105758e9da02670d',
    query: 'Kansas City'
  },
  dataType: 'json',
  success: function(apiResponse) {
    console.log("${apiResponse.location.name} ${apiResponse.current.temperature}℃");
  }
});


//async function currentWeather(city){
  //const url= `"https://api.weatherstack.com/current&units=m=609c6ca41a9803f4a3b46553fc8f5c5c"`
  
  //return await $.ajax({
      //url: url, 
      //method: "GET"
      //});
  //}
// display the trails

  //function renderDayCard (){ 
    //$('#cards').empty();
    //var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + locationName + "&units=imperial&appid=ed2ee741f61d9d60983426ca204e9ed6";
    //$.ajax ({
        //url: queryURL,
        //method: "GET"
    //}).then(function (response){
//for(var i = 0; i < response.list.length; i++){
    //if (response.list[i].dt_txt[12] === "5") {
    //console.log(response.list[i].dt_txt);
     //var card = $('<section>').addClass("card text-black bg-primary text-white").attr("style", "width: 7rem;");
     //var cardBody = $('<div>').addClass("card-body");
    //var cardDay = $('<h4>').addClass("card-title").text(moment.unix(response.list[i].dt).format("MM/DD/YYYY"));
    //var cardTemp = $('<p>').addClass('card-text').text("Temp:" + response.list[i].main.temp + "F");
    //var cardHumidity = $('<p>').addClass("card-text").text("Humidity: " + response.list[i].main.humidity + "%");
    //var cardImg = $('<img>').attr("src","http://openweathermap.org/img/w/" + image + ".png");
     //cardBody.append(cardDay, cardImg, cardTemp, cardHumidity);
     //card.append(cardBody);
    //$("#cards").append(card);
    //}
//}
 //})
//}
=======
>>>>>>> Stashed changes

//weather API key

//hiking API Key
<<<<<<< Updated upstream
function trailData() {
  var lat = 40.0274;
  var lon = -105.2519;

=======
>>>>>>> Stashed changes
$.ajax({
 //url:"https://www.hikingproject.com/data/get-trails?lat=40.0274&lon=-105.2519&maxDistance=10&key=200952288-580b87b672e00ea3e6f7ec1e05ad0bb9",
 url:"https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lon + "&maxDistance=10&key=200952288-580b87b672e00ea3e6f7ec1e05ad0bb9",
  method: "GET"
}).then(function(response) {
console.log(response)
})
<<<<<<< Updated upstream
}
  trailData ();
=======
>>>>>>> Stashed changes

//enter zip code (saves zip to local storage) append to a button to select previous location
// displays weather (Location & Day)
// displays 6 cards (closets)
// color codes the trail ( "green" shortest distance, "yellow" < 7 mile hike, advanced > more than 7 mile hike (red))
// get elevation and apply to the trails

<<<<<<< Updated upstream

//$("#button").on("click", async function(event){
  //var userinput= $("input").val()
  //const currentWeatherResponse= await currentWeather(userinput)
=======
>>>>>>> Stashed changes
