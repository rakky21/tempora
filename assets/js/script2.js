// // fetch('https://api.weather.gov') //this is where the weahter api or site would go
// //   .then(response => response.json())
// //   .then(data => console.log(data));
// // console.log(this)




// // function getTopTracks(artist) {
// //   queryUrl = "https://openweathermap.org/=" + artist + "&api_key=4729677d52a8bf825421bbb96d38f72a"
// //   fetch(queryUrl)
// //     .then(response => response.json())
// //     .then(data => {
// //       console.log(data);



// // KEY
// // d61c8cb5a02cd5f780f48614bb611138


// // do you need a different fetch per item listed below ???


// // http://api.openweathermap.org/data/2.5/solar_radiation?lat={lat}&lon={lon}&appid={API key}  radiation? UV? https://openweathermap.org/api/solar-radiation

// // console.log('hello')
// function getWeather(searchCity) {
//     // api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}

//     // queryUrl = 'https://api.openweathermap.org/data/2.5/onecall/timemachine?=' + searchCity + '&appid=d61c8cb5a02cd5f780f48614bb611138'
//     fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&appid=d61c8cb5a02cd5f780f48614bb611138')
//         // testing
//         // fetch(queryUrl)
//         .then(response => response.json())
//         .then(currentWeather => {
//             console.log(currentWeather)
//             fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + currentWeather.coord.lat + '&lon=' + currentWeather.coord.lon + '&appid=d61c8cb5a02cd5f780f48614bb611138')
//                 .then(response => response.json())
//                 .then(data => {
//                     console.log(data)
//                     // var 

//                 });
//         });
// };






// // if (currentWeather.name) {
// //   $('weather').text(currentWeather);
// // };


// // queryUrl = "https://openweathermap.org/=" + searchCity + "&APPID=d61c8cb5a02cd5f780f48614bb611138";
// // // console.log(this)

// // // fetch weather info from openweatherapi

// // fetch(queryUrl)
// //   .then(response => response.json())
// //   console.log(this)
// //   .then(currentWeather => {



// // create a variable to containe the elements


// //  BUTTON!!!

// $("#weatherBtn").click(function () {
//     //       // get the user's input
//     var searchCity = $("#searchCity").val()
//     //       // exec get weather
//     getWeather(searchCity);
//     //       // store user input in local storage
//     localStorage.setItem("city", JSON.stringify(searchCity));
//     // console.log(this)
// });





//   //     console.log(this)
//   // FIRST, SEARCH FOR CITY : CONDITIONS CURRENT AND FUTURE. CITY IS ADDED TO LIST







//   // CURRENT CONDITIONS DISPLAY :
//   // CITY NAME
//   // DATE
//   // ICON OF WEATHER CON
//   // TEMP
//   // HUMIDITY 
//     // WIND SPEED current.wind_speed 
//   // UV current.uvi



//     // COLOR REPRESENTS THE CONDIDITONS 
//     // GREEN:FAVORABLE
//     // YELLOW: MODERATE
//     // RED: SEVERE





//     // FUTURE CONDITIONS HOURLY



//     // 5 DAY FORECAST:
//     // DATE
//     // ICON OF WEATHER CONDITION
//     // TEMP
//     // WIND SPEED
//     // HUMIDITY



//     // CITY : SEARCH HISTORY SHOWS WITH CURRENT AND FUTURE CONDITIONS FOR THAT CITY
// CURRENT CONDITIONS DISPLAY :
// CITY NAME
// DATE
// ICON OF WEATHER CON
// TEMP
// HUMIDITY 
// WIND SPEED current.wind_speed 
// UV current.uvi
//  new one here
// $("#weatherRowImg").attr("src", "https://openweathermap.org/img/wn/" + currentWeather.weather[0].icon + "@2x.png");
// COLOR REPRESENTS THE CONDIDITONS 
// GREEN:FAVORABLE
// YELLOW: MODERATE
// RED: SEVERE
// FUTURE CONDITIONS HOURLY
// 5 DAY FORECAST:
// DATE
// ICON OF WEATHER CONDITION
// TEMP
// WIND SPEED
// HUMIDITY
// CITY : SEARCH HISTORY SHOWS WITH CURRENT AND FUTURE CONDITIONS FOR THAT CITY
// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key} 5 day API
//     } else {
//         console.log(data.message);
//         var errorMsgEl = document.createElement("p");
//         $(errorMsgEl).text(data.message);
//         $(errorMsgEl).addClass("text-error");
//         console.log(errorMsgEl);
//         $("#musicFormGrp").append(errorMsgEl);
// }

function getWeather(searchCity) {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&appid=d61c8cb5a02cd5f780f48614bb611138&units=imperial')
        .then(response => response.json())
        .then(currentWeather => {
            console.log(currentWeather)
            fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + currentWeather.coord.lat + '&lon=' + currentWeather.coord.lon + '&appid=d61c8cb5a02cd5f780f48614bb611138')
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (currentWeather.name) {
                        $('#weatherContent').text(currentWeather.name);
                        // $('#weatherTemp').text('Temp: ' + currentWeather.coord.temp + 'F');
                        $("#weatherTemp").text(currentWeather.temp);
                        // $('#weatherWind').text('Wind: ' + currentWeather.wind_speed + " MPH");
                        // $('#weatherHumidity').text('Humidity: ' + currentWeather.humidity + ' %');
                        $('#weatherContent').show();
                    }
                    else {
                        $("#weatherModalTitle").text("City is invalid. Please try again.");
                        $("#weatherModalTitle").addClass("text-error");
                        // localStorage.clear();
                        $("#weatherModalFooter").hide()
                        $("#weatherContent").addClass("text-error");
                    }
                });
        });
}




$("#weatherBtn").click(function () {
    var searchCity = $("#searchCity").val()
    getWeather(searchCity);
    localStorage.setItem("city", JSON.stringify(searchCity));
});





// api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}


// function getDays(cityList) {
//     fetch('https:// api.openweathermap.org/data/2.5/forecast?q=' + cityList + '&appid=d61c8cb5a02cd5f780f48614bb611138')
//         .then(response => response.json())
//         .then(fiveDays => {
//             console.log(fiveDays)
//         });
// }

