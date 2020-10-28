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
        console.log('======================WEATHER RESPONSE======================\n', response , '=========================================\n')
        
        document.getElementById("image").src = response.current.weather_icons[0];
        document.getElementById("output").innerHTML = "<h1>" + response.current.weather_descriptions[0] + "</h1>Temperature:" + response.current.temperature + "<br>Feels like:" + response.current.feelslike + "<br>UV index:" + response.current.uv_index + "<br>Humidity:" + response.current.humidity + "<br>Cloud cover:" + response.current.cloudcover;
        return {lat: response.location.lat , lon: response.location.lon}
      }).then(coords => {
        console.log('----------------coords-------------------------', coords)
        var lat = coords.lat;
        var lon = coords.lon;



        $.ajax({
          url: "https://www.hikingproject.com/data/get-trails?lat=" + lat + "&lon=" + lon + "&maxDistance=10&key=200952288-580b87b672e00ea3e6f7ec1e05ad0bb9",
          method: "GET"
        }).then(function (response) {
          console.log( '\n=================TRAILS==============\n', response.trails, '\n===================================\n')
          var trails = response.trails
             
          $(trails).each(function(index, el) {
            console.log( `${index}----> `, el)

             var dummyData = {
                      ascent: 0,
                      conditionDate: "",
                      conditionDetails: null,
                      conditionStatus: "",
                      descent: 0,
                      difficulty: "",
                      high: 0,
                      id: 0,
                      imgMedium: "",
                      imgSmall: "",
                      imgSmallMed: "",
                      imgSqSmall: "",
                      latitude: 0,
                      length: 0,
                      location: "",
                      longitude: 0,
                      low: 0,
                      name: "",
                      starVotes: 0,
                      stars: 0,
                      summary: "",
                      type: "",
                      url: ""
            }
          //  var cardElement = $('<div>').addClass('card')
            // var card = $('<section>').addClass("card text-black bg-primary text-white").attr("style", "width: 7rem;");
            var parent = $('#cardDisplay').attr("style", "width: 10rem");
            var imageMedium  = $('<img>').attr('src', el.imgMedium, "style", "width: 200px;", "height: 200px;", "justify-content: center;")
            //var cardDay = $('<h4>').addClass("card-title").text(moment.unix(conditionDate).format("MM/DD/YYYY"));
            //var cardImg = $('<img>').addClass('card-img').text(":" + response.list[i].main.temp + "F");
           //var cardHumidity = $('<p>').addClass("card-text").text("Humidity: " + response.list[i].main.humidity + "%");
           
         //  var cardImg = $('<img>').attr("src","http://openweathermap.org/img/w/" + image + ".png");
           
           //// cardBody.append(cardDay, cardImg, cardTemp, cardHumidity);
           // card.append(cardBody);
        //   $("#cards").append(card);




            parent.append(imageMedium)





           
             // <div class="card">
        
              //   <div class="card-image">
              //     <img src=`${trail.imgSqSmall}` width="200" height="200">
              //     <span class="card-title">${trail.name}</span>
              //   </div>
        
              //   <div class="card-content">
              //     <p>Difficulty: ${trail.difficulty}</p>
              //     <p>Rating: ${trail.stars}</p>
              //   </div>
        
              //   <div class="card-action">
              //     <a href="${trail.url}" target="_blank">Go to the trail site</a>
              //   </div>
        
              // </div>

          })
          
         
           })
      })
}

  $("#weatherbutton").on("click", getWeather);


  //hiking API Key
 
 



  //enter zip code (saves zip to local storage) append to a button to select previous location
  // displays weather (Location & Day)
  // displays 6 cards (closets)
  // color codes the trail ( "green" shortest distance, "yellow" < 7 mile hike, advanced > more than 7 mile hike (red))
  // get elevation and apply to the trails


  $("button").on("click", function () {
    //var userinput= $("input").val()
    //renderDayCard(userinput)
  })
})