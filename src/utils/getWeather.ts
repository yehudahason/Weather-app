const url =
  "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const apikey = import.meta.env.VITE_API_KEY;
export default async function getWeather(days: number) {
  const res = await fetch(url + `London,UK?key=${apikey}`);
  // console.log(res);
  const data = await res.json();
  console.log(data);
}
