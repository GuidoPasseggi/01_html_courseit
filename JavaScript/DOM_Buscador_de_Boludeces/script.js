const list = document.getElementById("results-list");
const chatInput = document.getElementById("chat");

const boludeces = [
  "la torta de marcos",
  "la palabra picapuerta",
  "carpinchos",
  "empanadas porteñas",
  "papas sucias",
  "fruta del dragón",
  "el libro gordo de petete",
  "el aeropuerto yorsh niubery",
  "sanguche de milanesa con pan frances",
  "lechuga",
  "lechuga criolla",
  "lechuga repollada",
  "banana roja",
  "mundo",
  "sopa de murcielago",
  "covid",
  "el terraplanismo",
  "el movimiento antivacunas"
];

const handleInput = () => {
  console.log(chatInput.value);
  
  let results = boludeces.filter((item) => {
    if (item.includes(chatInput.value)) {
      return true
    } else {
      return false
    }
  })
  
  list.innerHTML = null;
  
  for (let i = 0; i < results.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = results[i];
    
    list.appendChild(listItem);
  }
  
  console.log(results);
}