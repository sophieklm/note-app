(function(exports) {
  'use strict';

  function View(list){
    this.list = list;
  }

  View.prototype.createListHTML = function() {
    var string = "";
    for(var i = 0; i < this.list.getNotes().length; i++) {
          string += "<li><div>" + this.list.getNotes()[i].getText() + "</div></li>";
        }
    return "<ul>" + string + "</ul>";
  };

  exports.View = View;

})(this);
