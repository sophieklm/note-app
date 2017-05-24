(function(exports) {
  'use strict';

  function View(list = new List()){
    this.list = list;
  }

  View.prototype.createListHTML = function() {
    var string = "";
    for(var i = 0; i < this.list.getNotes().length; i++) {
      var text = this.list.getNotes()[i].getText();
      if (text.length > 20) {
        string += "<li><div>" + text.substring(0, 20) + "</div></li>";
      } else {
          string += "<li><div>" + text + "</div></li>";
        };
    }
    return "<ul>" + string + "</ul>";
  };

  exports.View = View;

})(this);
