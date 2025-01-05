let input = document.querySelector("input");
const btn = document.querySelector("#searchIcon");
const apiKey = "d0b79de0806f48f25e8039b381360f25";
const url = `https://api.openweathermap.org/data/2.5/weather?appid=${apiKey}&units=metric&q=`;
const temp = document.querySelector(".degNum");
const cityName = document.querySelector(".cityName");
const speed = document.querySelector("#speed");
const humid = document.querySelector("#humid");


const getWeather = async (city)=> {
  const res = await fetch(url + city);
  const data = await res.json();
  await console.log(data);
  temp.innerText = Math.round(data.main.temp) + "°c";
  cityName.innerText = data.name;
  speed.innerText = data.wind.speed + "km/h";
  humid.innerText = data.main.humidity + "%";
}

btn.addEventListener("click", ()=>{
  getWeather(input.value);
})

input.addEventListener("click", ()=>{
  input.value = "";
})
