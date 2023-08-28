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
    // console.log(response);
    const data = await response.json();
    console.log(data);
    return showWeather(data);
}

const showWeather = (data) => {


    if (data.cod == '404') {
        weather.innerHTML = '<h2>City Not Found <h2>';
        return;
    }
    weather.innerHTML = ` 
    <img  src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"; >
     <div>
     <h2>${data.main.temp}°c</h2>
     <h4>${data.weather[0].main}</h4>
`;

    weather1.innerHTML = `<h4>Feels_Like : ${data.main.feels_like}</h4>`

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



