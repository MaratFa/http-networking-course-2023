start();

async function start() {
  const apiKey = generateKey();
  const locations = await getLocations();

  async function getLocations() {
    const url = "https://api.boot.dev/v1/courses_rest_api/learn-http/locations";
    const response = await fetch(url, {
      method: "GET",
      mode: "cors",
      headers: {
        "X-API-Key": apiKey,
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  }

  console.log("Got some locations from the server.");

  for (const location of locations) {
    console.log(
      `- name: ${location.name}, recommendedLevel: ${location.recommendedLevel}`
    );
  }
}

function generateKey() {
  const characters = "ABCDEF0123456789";
  let result = "";
  for (let i = 0; i < 16; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

{
  ("movies");
  [
    {
      id: 1,
      genre: "Action",
      title: "Iron Man",
      director: "Jon Favreau",
    },
    {
      id: 2,
      genre: "Action",
      title: "The Avengers",
      director: "Joss Whedon",
    },
  ];
}
