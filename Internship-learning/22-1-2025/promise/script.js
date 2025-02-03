const button = document.getElementById("searchbutton");
const input = document.getElementById("city");
const locations = document.getElementById("locations");
const time = document.getElementById("time");
const temprature = document.getElementById("temprature");
const region = document.getElementById("region");
const currentlocation = document.getElementById("currentlocation");
const current = document.getElementById("current");

async function getdata(cityname) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=0fea3c4afd174809b9262659252201&q=${cityname}&aqi=yes`
    );

    if (!response.ok) {
      throw new Error("Location not found");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error("Add proper location");
  }
}

button.addEventListener("click", async () => {
  const value = input.value;

  try {
    const result = await getdata(value);
    console.log(result);

    locations.innerText = `${result.location.country}`;
    region.innerText = `${result.location.region}`;
    time.innerText = `${result.location.localtime}`;
    temprature.innerText = `${result.current.temp_c}`;
  } catch (error) {
    region.innerText = error.message;
    locations.innerText = "";
    time.innerText = "";
    temprature.innerText = "";
  }
});

async function getdataa(lat, long) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=0fea3c4afd174809b9262659252201&q=${lat},${long}&aqi=yes`
    );

    if (!response.ok) {
      throw new Error("Location not found");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error.message);
    throw new Error("Add proper location");
  }
}

async function getlocation(Position) {
  try {
    const result = await getdataa(Position.coords.latitude, Position.coords.longitude);
    console.log(result);

    current.innerHTML =
      result.location.name + ", " + result.location.region + "\n" + result.location.country;
  } catch (error) {
    current.innerHTML = "Add proper location";
  }
}

function notgetlocation() {
  current.innerText = "Location access denied. Please enable location services.";
}

currentlocation.addEventListener("click", async () => {
  navigator.geolocation.getCurrentPosition(getlocation, notgetlocation);
});
