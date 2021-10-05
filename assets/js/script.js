
function getWeather(searchCity) {

  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&appid=d61c8cb5a02cd5f780f48614bb611138')
      .then(response => response.json())
      .then(currentWeather => {
          console.log(currentWeather)
          fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + currentWeather.coord.lat + '&lon=' + currentWeather.coord.lon + '&appid=d61c8cb5a02cd5f780f48614bb611138')
              .then(response => response.json())
              .then(data => {
                  console.log(data)
                  fetch('https:// api.openweathermap.org/data/2.5/forecast?q=' + cityList + '&appid=d61c8cb5a02cd5f780f48614bb611138')
                  .then(response => response.json())
                  .then(fiveDays => {
                      console.log(fiveDays)
                  });
          
                  if (currentWeather.name) {
                      $('#weatherContent').text(currentWeather.name);
                      // $('#weatherTemp').text('Temp: ' + currentWeather.coord.temp + 'F');
                      $("#weatherTemp").text(currentWeather.temp);
                      $('#weatherWind').text('Wind: ' + currentWeather.wind_speed + " MPH");
                      $('#weatherHumidity').text('Humidity: ' + currentWeather.humidity + ' %');
                      $('#weatherContent').show();
                  }
              });
      });
}


$("#weatherBtn").click(function () {
  var searchCity = $("#searchCity").val()
  getWeather(searchCity);
  localStorage.setItem("city", JSON.stringify(searchCity));
});