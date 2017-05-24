(function(exports) {
  'use strict';

  function View(list = new List()){
    this.list = list;
  }

  View.prototype.createListHTML = function() {
    var string = "";
    for(var i = 0; i < this.list.getNotes().length; i++) {
      var text = this.list.getNotes()[i].getText();
      var id = this.list.getNotes()[i].getID();
      if (text.length > 20) {
        string += "<li><div><a href='#notes/" + id + "'>" + text.substring(0, 20) + "</a></div></li>";
      } else {
          string += "<li><div><a href='#notes/" + id + "'>" + text + "</a></div></li>";
        };
    }
    return "<ul>" + string + "</ul>";
  };

  exports.View = View;

})(this);
