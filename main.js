let button = document.querySelector("#btn");
let boxButton = document.querySelector('.button-box')

function leftClick() {
  button.style.left = "62px";
  button.style.background = "#00FF00d3"
  boxButton.style.borderColor = "#00FF00d3"
}

function rightClick() {
  button.style.left = "3px";
  button.style.background = "#FFF"
  boxButton.style.borderColor = "#FFF"
}
