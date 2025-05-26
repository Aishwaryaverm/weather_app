let loc = "London";

const input = document.getElementById("search");
const btn = document.getElementById("btn");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const humadity = document.getElementById("humadity");
const wind = document.getElementById("wind");
const condition = document.getElementById("condition");

btn.addEventListener("click", checkWeather);

async function checkWeather() {
    loc = input.value || "London";
    const apikey = "SXUC4PYGX7STFVG6L22DMGZDE";
    const apiurl = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${loc}?unitGroup=metric&key=${apikey}&contentType=json`;

    try {
        const response = await fetch(apiurl);
        if (!response.ok) throw new Error("Weather data not found.");
        const data = await response.json();
        console.log(data);

        city.innerText = loc;
        condition.innerText = data.currentConditions.conditions;
        temp.innerText = `${data.currentConditions.temp}°C`;
        humadity.innerText = `${data.currentConditions.humidity}%`;
        wind.innerText = `${data.currentConditions.windspeed} km/h`;
    } catch (error) {
        alert("City not found or error fetching data.");
        console.error(error);
    }
}
