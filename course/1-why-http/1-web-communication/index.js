getItemData();

async function getItemData() {
  const response = await fetch(
    "https://api.boot.dev/v1/courses_rest_api/learn-http/items"
  );
  response.json().then((data) => {
    for (const item of data) {
      console.log(item.name);
    }
  });
}
