const baseurl = "http://api.weatherapi.com/v1/current.json";
const apikey = "0503e1d421fa4f4eade153819240512";
async function get() {
  const res = await fetch(baseurl + `?key=${apikey}&q=netivot`);
  const data = await res.json();
  console.log(data);
}

get();
