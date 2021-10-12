
function getWeather(searchCity) {

  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&appid=d61c8cb5a02cd5f780f48614bb611138')
  .then(response => response.json())
  .then(currentWeather => {
      console.log(currentWeather)
      fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + currentWeather.coord.lat + '&lon=' + currentWeather.coord.lon + '&appid=d61c8cb5a02cd5f780f48614bb611138')
          .then(response => response.json())
          .then(data => {
              // console.log(data)
              // fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + searchCity + '&appid=d61c8cb5a02cd5f780f48614bb611138')
              // .then(response => response.json())
              // .then(fiveDays => {
              //     console.log(fiveDays)
                  console.log(data)
                  if (currentWeather.name) {
                      $('#weatherName').text(currentWeather.name + ' Date Img');
                      $('#weatherTemp').text('Temp: ' + currentWeather.main.temp + 'F');
                      $('#weatherWind').text('Wind: ' + currentWeather.wind.speed + " MPH");
                      $('#weatherHumidity').text('Humidity: ' + currentWeather.main.humidity + ' %');
                      $('#weatherUVI').text('UV Index: ' + data.current.uvi + ' %');
                      // console.log(currentWeather.temp)
                      $('#weatfgfherContent').show();
                      $('#weatherTemp').show();
                      $('#weatherHumidity').show();
                      $('#weatherWind').show();
                      $('#weatherUVI').show();

                      // 5 day
                      $('.card-titleone').text(data.timezone);
                      $('#weathertTempone').text(data.daily[1].temp.day);

                      

                      // 5 days display
                      $('.card-titleone').show();


                      // console.log(this)
                  }
                  else {
                      $("#weatherModalTitle").text("City is invalid. Please try again.");
                      $("#weatherModalTitle").addClass("text-error");
                      // localStorage.clear();
                      // $("#weatherModalFooter").hide()
                      $("#weatherContent").addClass("text-error");
                  }
              });
      });
// });
}


$("#weatherBtn").click(function () {
  var searchCity = $("#searchCity").val()
  getWeather(searchCity);
  localStorage.setItem("city", JSON.stringify(searchCity));
});
