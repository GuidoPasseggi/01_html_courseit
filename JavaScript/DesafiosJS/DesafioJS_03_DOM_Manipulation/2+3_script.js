const list = document.getElementById("results-list");
const listInput = document.getElementById("li-input");


// Execute a function when the user releases a key on the keyboard
listInput.addEventListener("keyup", function(event) {
  // Number 13 is the "Enter" key on the keyboard
  if (event.keyCode === 13) {
    // Cancel the default action, if needed
    event.preventDefault();
    // Trigger the button element with a click
    document.getElementById("button-add").click();
  }
});


const add_p = function () {
  if (listInput.value.length === 0) {
    alert("No ha ingresado dato alguno")
  }
  else {
    let li = document.createElement("li");
    li.setAttribute("class", "element")
    li.appendChild(document.createTextNode(listInput.value));
    list.appendChild(li)
    // Resetear el value del input:
    listInput.value = ""
  }
}

const clean = () => {
  document.querySelectorAll(".element").forEach(e => e.parentNode.removeChild(e));
}

const rm_last = () => {
  let elem = document.querySelector(".ul-list");
  elem.removeChild(elem.lastChild);
  //// Y para eliminar el primer "li" (el mas antiguo):
  // elem.parentNode.removeChild(elem);
}


