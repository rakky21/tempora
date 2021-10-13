
function getWeather(searchCity) {

    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + searchCity + '&appid=d61c8cb5a02cd5f780f48614bb611138')
        .then(response => response.json())
        .then(currentWeather => {
            console.log(currentWeather)
            fetch('https://api.openweathermap.org/data/2.5/onecall?lat=' + currentWeather.coord.lat + '&lon=' + currentWeather.coord.lon + '&appid=d61c8cb5a02cd5f780f48614bb611138')
                .then(response => response.json())
                .then(data => {
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
                        // $('#weathertTempone').text(data.daily[i].temp.day);
                        $('.card-titleone').show();
                        // console.log(this)
                        for (var i = 0; i < data.daily[i].temp.day; i++) {
                            $('.card-title').text(data.timezone);
                            // $(".grpImg").attr("src", "https://openweathermap.org/img/wn/" + currentWeather.weather[0].icon + "@2x.png");
                            $('.tempgrp').text('Temp: ' + data.daily[i].temp.day + ' F');
                            $('.wsgrp').text('Wind Speed: ' + data.daily[i].wind_speed + ' MPH');
                            $('.humidgrp').text('Humidity: ' + data.daily[i].humidity + ' %');
                            $('.card-titleone').show()
                        }
                    }
                    else {
                        $("#weatherTitle").text("City is invalid. Please try again.");
                        $("#weatherTitle").addClass("text-error");
                        // localStorage.clear();
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
