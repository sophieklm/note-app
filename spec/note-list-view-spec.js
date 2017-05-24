'use scrict';

var string = 'Thing';
var list = new List();
var view = new View(list);

function testViewHandlesEmptyList() {
  var html = "<ul></ul>"
  assert.isEq(view.createListHTML(), html);
}

function testViewReturnsOneNoteAsString() {
  var html = "<ul><li><div>Thing</div></li></ul>"
  list.addNote(string);
  assert.isTrue(view.createListHTML(), html);
}

function testViewReturnsTwoNotesAsString() {
  var list = new List();
  var view = new View(list);
  var html = "<ul><li><div>Thing</div></li><li><div>Thing</div></li></ul>";
  list.addNote(string);
  list.addNote(string);
  assert.isTrue(view.createListHTML(), html);
}

testViewHandlesEmptyList();
testViewReturnsOneNoteAsString();
testViewReturnsTwoNotesAsString();
