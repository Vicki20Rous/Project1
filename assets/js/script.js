
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
  });  
  }
    console.log (getWeather)

// async function currentWeather(city){
//   const url= "https://api.weatherstack.com/current&units=m=609c6ca41a9803f4a3b46553fc8f5c5c"
  
//   return await $.ajax({
//       url: url, 
//       method: "GET"
//       });
//   }
//display the trails

//   function renderDayCard (locationName){ 
//     $('#cards').empty();
//     var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + locationName + "&units=imperial&appid=ed2ee741f61d9d60983426ca204e9ed6";
//     $.ajax ({
//         url: queryURL,
//         method: "GET"
//     }).then(function (response){
//       console.log(response)
// for(var i = 0; i < response.list.length; i++){
//     if (response.list[i].dt_txt[12] === "5") {
//     console.log(response.list[i].dt_txt);
//      var card = $('<section>').addClass("card text-black bg-primary text-white").attr("style", "width: 7rem;");
//      var cardBody = $('<div>').addClass("card-body");
//     var cardDay = $('<h4>').addClass("card-title").text(moment.unix(response.list[i].dt).format("MM/DD/YYYY"));
//     var cardTemp = $('<p>').addClass('card-text').text("Temp:" + response.list[i].main.temp + "F");
//     var cardHumidity = $('<p>').addClass("card-text").text("Humidity: " + response.list[i].main.humidity + "%");
//     var cardImg = $('<img>').attr("src","http://openweathermap.org/img/w/" + image + ".png");
//      cardBody.append(cardDay, cardImg, cardTemp, cardHumidity);
//      card.append(cardBody);
//     $("#cards").append(card);
//     }
// }
//  })
// }

//weather API key

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


$("#button").on("click", async function(event){
  var userinput= $("input").val()
  //const currentWeatherResponse= await currentWeather(userinput)
  renderDayCard(userinput)
})
