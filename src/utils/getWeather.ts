const apikey2 = import.meta.env.VITE_GEO_KEY;
const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const apikey = import.meta.env.VITE_API_KEY;

export async function getWeather(city: string) {
  const res = await fetch(url + `${city}?key=${apikey}`);
  // console.log(res);
  const data = await res.json();
  console.log(data);
}

export async function getCity(city: string) {
  const res = await fetch(
    `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apikey2}`,
  );
  const data = await res.json();
  console.log(data);
}
// const results = searchCities("haif");
// getWeather(results[0].name);

// console.log(results);
