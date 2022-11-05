/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

console.log("Happy hacking :)");

const urlBase = "https://platzi-avo.vercel.app";
const appNode = document.querySelector("#app");
const formatPrice = (price) => {
  const newPrice = new window.Intl.NumberFormat("en-EN", {
    style: "currency",
    currency: "USD",
  }).format(price);
  return newPrice;
};
// web api
// contectarnos al server
window
  .fetch(`${urlBase}/api/avo`)
  .then((response) => response.json())
  .then((responseJson) => {
    const todosLosItmes = [];
    responseJson.data.forEach((item) => {
      // crear imagen
      const imagen = document.createElement("img");
      // url de la imagen
      imagen.src = `${urlBase}${item.image}`;
      // crear titulo
      const title = document.createElement("h2");
      title.textContent = item.name;
      title.className = "text-black font-bold text-xl mb-2 leading-tight";
      // crear precio
      const price = document.createElement("div");
      price.textContent = formatPrice(item.price);
      price.className = "font-bold text-xl ";

      const items = document.createElement("div");
      items.className =
        "p-4 m-4 c-card block bg-white shadow-md hover:shadow-xl rounded-lg overflow-hidden text-center";
      items.append(imagen, title, price);

      todosLosItmes.push(items);
    });
    const container = document.createElement("div");
    container.className =
      "flex flex-wrap sm:grid-cols-1 md:grid-cols-3 xl:grid-cols-3";
    container.append(...todosLosItmes);
    appNode.append(container);
  });
// procesar la respuesta y convertirla en json
// JSON -> Data -> Render
