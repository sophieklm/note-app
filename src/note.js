'use strict';

(function(exports) {

  var NOTE_COUNT = 0;

  function Note(message) {
    this._text = message;
    this._id = NOTE_COUNT;
    NOTE_COUNT ++;
  }

  Note.prototype.getText = function(){
    return this._text;
  };

  Note.prototype.getID = function() {
    return this._id;
  }

  exports.Note = Note;
})(this);
