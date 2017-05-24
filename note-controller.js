(function(exports) {

function createList() {
  list = new List();
  view = new View(list);
  html = view.createListHTML();
  element = document.getElementById("app");
  element.innerHTML = html;
}

createList();

})(this);
