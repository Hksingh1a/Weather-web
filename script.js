console.log("HEllo working")
const apiKey = "eb9336eb5877d3ba0c2dc48706e3869c";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const Searchbox = document.querySelector(".Ctname")
const Searchbtn = document.querySelector(".search")
const weatherIcon = document.querySelector("wimg")

async function CheckWeather(city) {
    console.log("wrok")
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block"
        document.querySelector(".Weather").style.display = "none"
        console.log("error")

    } else {

        let data = await response.json();
        console.log(data);
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp_min)+"°C"+" " + "to" + " " + Math.round(data.main.temp_max) +"°C"
        document.querySelector(".city").innerHTML = data.name
        document.querySelector(".humid-1").innerHTML = data.main.humidity + "%"
        document.querySelector(".wind-1").innerHTML = data.wind.speed + "Km/h"
        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "images/mist.png";
        }
        // else if (data.weather[0].main == "Haze") {
        //     weatherIcon.src = "images/haze.png";
        // }
        else if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "images/snow.png";
        }
        document.querySelector(".error").style.display = "none"
        document.querySelector(".Weather").style.display = "flex"

    }

}


Searchbtn.addEventListener("click", () => {
    CheckWeather(Searchbox.value);
})

// const apiKey = "eb9336eb5877d3ba0c2dc48706e3869c";
// const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const searchBox = document.querySelector(".Ctname");
// const searchBtn = document.querySelector(".search");
// const weatherIcon = document.querySelector(".wimg");

// async function checkWeather(city) {
//     const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
//     if (response.status == 404) {
//         document.querySelector(".error").style.display = "block";
//         document.querySelector(".Weather").style.display = "none";
//     } else {

//         let data = await response.json();
//         console.log(data);
//         document.querySelector(".city").innerHTML = data.name;
//         document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
//         document.querySelector(".humid-1").innerHTML = data.main.humidity + "%";
//         document.querySelector(".wind-1").innerHTML = data.wind.speed + "Km/h";
        // if (data.weather[0].main == "Clouds") {
        //     weatherIcon.src = "images/clouds.png";
        // }
        // else if (data.weather[0].main == "clear") {
        //     weatherIcon.src = "images/clear.png";
        // }
        // else if (data.weather[0].main == "Rain") {
        //     weatherIcon.src = "images/rain.png";
        // }
        // else if (data.weather[0].main == "Drizzle") {
        //     weatherIcon.src = "images/drizzle.png";
        // }
        // else if (data.weather[0].main == "Mist") {
        //     weatherIcon.src = "images/mist.png";
        // }

//         document.querySelector(".Weather").style.display = "flex";
//         document.querySelector(".error").style.display = "none";

//     }






// }
// searchBtn.addEventListener("click", () => {
//     checkWeather(searchBox.value);
// });
