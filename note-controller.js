(function(exports) {

  function Controller(list = new List()) {
     this.list = list;
     this.view = new View(this.list);
  }

  Controller.prototype.getHTMLView = function(){
    html = this.view.createListHTML();
    element = document.getElementById("list");
    element.innerHTML = html;
  };

  exports.Controller = Controller;
})(this);
