const weatherData = {
    "Karachi": {
        temperature: "30°C",
        description: "Clear",
        icon: "images/clear.png",
    },
    "Lahore": {
        temperature: "18°C",
        description: "Cloudy",
        icon: "images/clouds.png",
    },
    "Islamabad": {
        temperature: "15°C",
        description: "Party Cloudy",
        icon: "images/drizzle.png",
    },
    "Faisalabad": {
        temperature: "25°C",
        description: "Mist",
        icon: "images/mist.png",
    },
    "Rawalpindi": {
        temperature: "20°C",
        description: "Cloudy",
        icon: "images/clouds.png",
    },
    "Multan": {
        temperature: "28°C",
        description: "Mist",
        icon: "images/mist.png",
    },
    "Gujranwala": {
        temperature: "22°C",
        description: "Party Cloudy",
        icon: "images/drizzle.png",
    },
    "Hyderabad": {
        temperature: "35°C",
        description: "Clear",
        icon: "images/clear.png",
    },
    "Peshawar": {
        temperature: "17°C",
        description: "Rainy",
        icon: "images/rain.png",
    },
    "Quetta": {
        temperature: "-5°C",
        description: "Snowy",
        icon: "images/snow.png",
    },
    "Sialkot": {
        temperature: "19°C",
        description: "Windy",
        icon: "images/wind.png",
    },
    "Bahawalpur": {
        temperature: "32°C",
        description: "Clear",
        icon: "images/clear.png",
    },
    "Sukkur": {
        temperature: "33°C",
        description: "Clear",
        icon: "images/clear.png",
    },
    "Larkana": {
        temperature: "36°C",
        description: "Clear",
        icon: "images/clear.png",
    },
    "Sheikhupura": {
        temperature: "21°C",
        description: "Clear",
        icon: "images/clear.png",
    },
    "Mirpur Khas": {
        temperature: "31°C",
        description: "Cloudy",
        icon: "images/clouds.png",
    },
    "Rahim Yar Khan": {
        temperature: "35°C",
        description: "Drizzle",
        icon: "images/drizzle.png",
    },
    "Gujrat": {
        temperature: "21°C",
        description: "Clear",
        icon: "images/clear.png",
    },
    "Mardan": {
        temperature: "16°C",
        description: "Rainy",
        icon: "images/rain.png",
    },
    "Kasur": {
        temperature: "23°C",
        description: "Cloudy",
        icon: "images/clouds.png",
    },
};


var city = document.getElementById('city');
var temp = document.getElementById('temp');
var desc = document.getElementById('description');
var iconImg = document.getElementById('weather-icon');
var searchbtn = document.getElementById("searchbtn");
searchbtn.addEventListener('click', function () {
    var inputCity = document.getElementById("input-here").value.toLowerCase();
    inputCity = inputCity.charAt(0).toUpperCase() + inputCity.slice(1);
    if (weatherData[inputCity]) {
        city.innerText = inputCity;
        temp.innerText = weatherData[inputCity]['temperature'];
        desc.innerText = weatherData[inputCity]['description'];
        iconImg.src = weatherData[inputCity]['icon'];
    } else {
        alert('City not found!');
    }
});
