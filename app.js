const API_KEY = "37d8678e6a4395ac9557c0abbc1f6dc5";

searchTemperature = () => {
  const input = document.getElementById("city-name");
  const checkcity = input.value;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${checkcity}&appid=${API_KEY}&units=metric`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => setTemp(data));
};

displaycityName = (id, text) => {
  document.getElementById(id).innerText = text;
};

const setTemp = (Temperature) => {
  //   console.log(Temperature);
  //   if (Temperature === Temperature.cod) {
  //     console.log("city not Found");
  //   }

  displaycityName("city", Temperature.name);
  displaycityName("temperatures", Temperature.main.temp);
  displaycityName("condition", Temperature.weather[0].main);
  const url = `http://openweathermap.org/img/wn/${Temperature.weather[0].icon}@2x.png`;
  const imgIcon = document.getElementById("weather-icon");
  imgIcon.setAttribute("src", url);
};
