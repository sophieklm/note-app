(function(exports) {
  'use strict';

  function SingleNoteView(note){
    this.note = note;
  }

  SingleNoteView.prototype.createNoteHTML = function() {
    return "<div>" + this.note.getText() + "</div>";
  };

  exports.SingleNoteView = SingleNoteView;

})(this);
