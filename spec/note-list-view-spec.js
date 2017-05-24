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
  assert.isEq(view.createListHTML(), html);
}

function testViewReturnsTwoNotesAsString() {
  var view = new View();
  var html = "<ul><li><div>Thing</div></li><li><div>Thing</div></li></ul>";
  view.list.addNote(string);
  view.list.addNote(string);
  assert.isEq(view.createListHTML(), html);
}

function testViewShowsOnly20Chars(){
  var view = new View();
  var html = "<ul><li><div>This is a string lon</div></li></ul>";
  view.list.addNote("This is a string longer than 20 chars");
  assert.isEq(view.createListHTML(), html);
}

testViewHandlesEmptyList();
testViewReturnsOneNoteAsString();
testViewReturnsTwoNotesAsString();
testViewShowsOnly20Chars();
