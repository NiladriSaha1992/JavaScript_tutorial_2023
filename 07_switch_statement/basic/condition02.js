const select = document.querySelector("#weather_id");
const para = document.querySelector("#res");

select.addEventListener("change", getWeatherForcast);

function getWeatherForcast() {
  const option = select.value;

  switch (option) {
    case "Sunny":
      para.textContent =
        "It is too hot outside, wear a sort, go to beach and have an ice-cream";
      break;
    case "Rainy":
      para.textContent =
        "Rain is falling outside; take a rain coat and an umbrella, and don't stay out for too long.";
      break;
    case "Snowing":
      para.textContent =
        "The snow is coming down — it is freezing! Best to stay in with a cup of hot chocolate, or go build a snowman.";
      break;
    case "Overcast":
      para.textContent =
        "It isn't raining, but the sky is grey and gloomy; it could turn any minute, so take a rain coat just in case.";
      break;
    default:
      para.textContent = "";
  }
}
