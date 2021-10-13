
function getWeather(searchCity) {

  fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&appid=d61c8cb5a02cd5f780f48614bb611138')
      .then(response => response.json())
      .then(currentWeather => {
          console.log(currentWeather)
          fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + currentWeather.coord.lat + '&lon=' + currentWeather.coord.lon + '&appid=d61c8cb5a02cd5f780f48614bb611138')
              .then(response => response.json())
              .then(data => {
                  console.log(data)
                  fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + searchCity + '&appid=d61c8cb5a02cd5f780f48614bb611138')
                  .then(response => response.json())
                  .then(fiveDays => {
                      console.log(fiveDays)
                  if (currentWeather.name) {
                    for (var i = 0; i < data.daily[i].temp.day ; i++) {
                      // for (var i = 0; i < 6; 1++) {
                          $('.card-title').text(data.timezone);

                          // $('#weathertTempone').text(data.daily[i].temp.day);
                          // 5 days display

                          $('.card-titleone').show()
                  }; 
                  }
                  else {
                    $("#weatherTitle").text("City is invalid. Please try again.");
                    $("#weatherTitle").addClass("text-error");
                    // localStorage.clear();
                    // $("#weatherModalFooter").hide()
                    $("#weatherContent").addClass("text-error");
                  }
              });
      });
    });
}


$("#weatherBtn").click(function () {
  var searchCity = $("#searchCity").val()
  getWeather(searchCity);
  localStorage.setItem("city", JSON.stringify(searchCity));
});