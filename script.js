// const apiKey = "27bb3da4d56580ebbf20cdb547dc985b";
// function getweather(){
//     let city= document.getElementById("city").ariaValueMax;
//     if (city===""){
//         alert("please enter a city name ");
//         return;}
//         let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
//         fetch(url)
//         .then(Date =>{
//             document.getElementById("cityName").innerText = Data.name;
//             document.getElementById("temp").innerText = "Temperature: "+ data.main.temp+ " °C";
//             document.getElementById("weather").innerText = "weather: "+ data.weather[0].description;
//             alert(JSON.stringify(data));
//         })
    
// }
const apiKey = "27bb3da4d56580ebbf20cdb547dc985b";

function getweather() {
    let city = document.getElementById("city").value;

    if (city === "") {
        alert("Please enter a city name");
        return;
    }

    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById("cityName").innerText = data.name;
            document.getElementById("temp").innerText =
                "Temperature: " + data.main.temp + " °C";
            document.getElementById("weather").innerText =
                "Weather: " + data.weather[0].description;
        })
        .catch(error => {
            alert("City not found!");
            console.log(error);
        });
}

