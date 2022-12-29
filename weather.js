import { displayWeather } from "./app.js";

const form = document.getElementById("form");
const search = document.getElementById("search");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const city = search.value;
  if (city) {
    const response = await fetch("http://localhost:3000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ city: city }),
    });
    const data = await response.json();
    displayWeather(data, city);
  }
});
