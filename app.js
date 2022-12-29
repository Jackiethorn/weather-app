const displayDiv = document.querySelector(".weather-status");
const displayDivTomorrow = document.querySelector(".weather-status--tomorrow");

export function displayWeather(data, city) {
  const { temperature, wind, description, forecast } = data;
  console.log(temperature, wind);

  displayDiv.innerHTML = `
  <div class="weather-status--today">
                    <h2 class="day-heading">today</h2>
                    <small class="weather-status--city---name">${city}</small>
                    <div class="inside-wrapper">
                        <div class="degree-wrapper">
                            <span class="weather-status--degree">${
                              forecast[0].temperature
                            }</span>
                            <img src="${setImage(description)}" alt="" />
                        </div>
                        <div class="small-status">
                            <small class="small-status--text">${description}</small>
                            <small class="small-status--wind">wind: <span>${
                              forecast[0].wind
                            }</span></small>
                        </div>
                    </div>
                </div>`;

  displayDivTomorrow.innerHTML = `
    <h2 class="day-heading">tomorrow</h2>
                <small class="weather-status--city---name">${city}</small>
                <div class="inside-wrapper">
                    <div class="degree-wrapper">
                        <span class="weather-status--degree">${
                          forecast[1].temperature
                        }</span>
                        <img src="${setImage(description)}" alt="" />
                    </div>
                    <div class="small-status">
                        <small class="small-status--text">${description}</small>
                        <small class="small-status--wind">wind: <span>${
                          forecast[1].wind
                        }</span></small>
                    </div>
                </div>`;
}

function setImage(desc) {
  if (desc.toLowerCase() == "sunny" || desc.toLowerCase() == "clear") {
    return "/images/brightness-high.svg";
  } else if (
    desc.toLowerCase() == "partly cloudy" ||
    desc.toLowerCase() == "cloudy"
  ) {
    return "/images/clouds.svg";
  } else if (
    desc.toLowerCase() == "light snow" ||
    desc.toLowerCase() == "snow"
  ) {
    return "/images/cloud-snow.svg";
  } else if (
    desc.toLowerCase() == "rainy" ||
    desc.toLowerCase() == "light rain"
  ) {
    return "/images/cloud-rain.svg";
  } else return;
}
