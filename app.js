const API_KEY = '3265874a2c77ae4a04bb96236a642d2f'

// const API = `https://api.openweathermap.org/data/2.5/weather?
// q=${city}&appid=${API_KEY}&units=metric`

// const IMG_URL = `https: //openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`

const form = document.querySelector("form")
const search = document.querySelector("#search")
const weather = document.querySelector("#weather")


const getWeather = async (city) => {
    weather.innerHTML = "<h2>Lodaing....↺</h2>";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    const response = await fetch(url)

    const data = await response.json();
    console.log(data);
    return showWeather(data);
}



const showWeather = (data) => {


    if (data.cod == '404') {
        weather.innerHTML = '<h2>City Not Found <h2>';
        weather.style.color = "black";
        return;
    } else {

        weather.innerHTML = ` 
        <img style="color:"white" " src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"; >
         <div>
         
         <h3>Weather</h3>
         <h2>${data.main.temp}°C</h2>
         <h4>${data.weather[0].description}</h4>
    `;

        document.getElementById("weather1").innerHTML = `<h4>Feels_Like : ${data.main.feels_like}</h4>`
        document.getElementById("weather2").innerHTML = `<h4> Humidity: ${data.main.humidity}%</h4> <h4> Wind: ${Math.floor(data.wind.speed * 3.6)} km/h</h4>
        <h4> deg: ${Math.floor(data.wind.deg)}°</h4>`
        document.getElementById("weather3").innerHTML = ` <h4>Coordinate: </h4> 
        <h4>Latitude:  ${Math.round(data.coord.lat * 100) / 100} </h4>
        <h4>Longitude:  ${Math.round(data.coord.lon * 100) / 100}</h4>`
        document.getElementById("weather4").innerHTML = `<h4>Country : ${data.sys.country} <img src="https://flagsapi.com/${data.sys.country}/shiny/32.png" ></h4>`
    }




}



form.addEventListener("submit", (event) => {
    //as forms get submitted it start reloaidng 
    // that is default of forms 
    // you can try to submit it will start reloading 
    // so to stop reloading add event.preventDeafult()
    console.log(search.value);
    getWeather(search.value);
    event.preventDefault();
}
)
