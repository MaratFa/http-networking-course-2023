const apiKey = generateKey();
const itemURL = "https://api.boot.dev/v1/courses_rest_api/learn-http/items";

const items = getData(itemURL);

items.then((data) => {
  for (const element of data) {
    console.log(element.name)
  } 
})

async function getData(url) {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": apiKey,
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}


