const button = document.getElementById("searchbutton");
const input = document.getElementById("city");
const locations = document.getElementById("locations");
const time = document.getElementById("time");
const temprature = document.getElementById("temprature");
const region = document.getElementById("region");

function getdata(cityname) {
  return fetch(
    `http://api.weatherapi.com/v1/current.json?key=0fea3c4afd174809b9262659252201&q=${cityname}&aqi=yes`
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
      return response.json(); 
    })
    .then((data) => {
      return data; 
    })
    .catch((error) => {
      console.error("Error:", error.message); 
      throw error; 
    });
}

button.addEventListener("click", () => {
  const value = input.value;

  if (!value) {
    alert("Please enter a city name!");
    return;
  }

  getdata(value) 
    .then((result) => {
      console.log(result);
      locations.innerText = `${result.location.country}`;
      region.innerText = `${result.location.region}`;
      time.innerText = `${result.location.localtime}`;
      temprature.innerText = `${result.current.temp_c}°C`;
    })
    .catch((error) => {
      locations.innerText = "Error fetching data!";
      region.innerText = "";
      time.innerText = "";
      temprature.innerText = "";
    });
});
