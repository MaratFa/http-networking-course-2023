const bootdevAPIDomain = "api.boot.dev";

start();

async function start() {
  const apiKey = generateKey();
  const items = await getItemData(bootdevAPIDomain, apiKey);
  logItems(items);
}

function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

async function getItemData(domain, apiKey) {
  const response = await fetch(
    `https://${domain}/v1/courses_rest_api/learn-http/items`,
    {
      method: "GET",
      mode: "cors",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
    }
  );
  return response.json();
}

function logItems(items) {
  for (const item of items) {
    console.log(item.name);
  }
}
