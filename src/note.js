'use strict';

(function(exports) {
  function Note(message) {
    this._text = message;
  }

  Note.prototype.getText = function(){
    return this._text;
  };

  exports.Note = Note;
})(this);
