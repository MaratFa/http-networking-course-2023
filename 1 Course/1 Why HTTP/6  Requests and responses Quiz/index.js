/* Question:
 Does the example code run on a client or a server?
*/

const itemURL = "https://api.boot.dev/v1/courses_rest_api/learn-http/items";

const items = getData(itemURL);

console.log(items);

async function getData(url) {
  const response = await fetch(url, {
    method: "GET",
    mode: "cors",
    headers: {
      "X-API-Key": "Testing",
      "Content-Type": "application/json",
    },
  });
  return response.json();
}

/*
Answer:
Client
*/
