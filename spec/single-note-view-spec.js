'use scrict';

var string = 'Thing';
var note = new Note(string);
var view = new SingleNoteView(note);

function testViewForSingleNote() {
  var html = "<div>Thing</div>"
  assert.isEq(view.createNoteHTML(), html);
}

testViewForSingleNote();
