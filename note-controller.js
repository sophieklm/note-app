(function(exports) {

function changeText() {
  element = document.getElementById("app");
  console.log(element);
  element.innerHTML = "Howdy";
}

changeText();

})(this);
