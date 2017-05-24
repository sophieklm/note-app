'use scrict';

var string = 'Thing';
var list = new List();
var view = new View(list);

function testViewHandlesEmptyList() {
  var html = "<ul></ul>"
  assert.isEq(view.createListHTML(), html);
}

function testViewReturnsOneNoteAsString() {
  var view = new View(list);
  list.addNote(string);
  var id = view.list.getNotes()[0].getID();
  var html = "<ul><li><div><a href='#notes/" + id + "'>Thing</a></div></li></ul>"
  assert.isEq(view.createListHTML(), html);
}

function testViewReturnsTwoNotesAsString() {
  var view = new View();
  view.list.addNote(string);
  view.list.addNote(string);
  var id0 = view.list.getNotes()[0].getID();
  var id1 = view.list.getNotes()[1].getID();
  var html = "<ul><li><div><a href='#notes/" + id0 + "'>Thing</a></div></li><li><div><a href='#" + id1 + "'>Thing</a></div></li></ul>";
  assert.isEq(view.createListHTML(), html);
}

function testViewShowsOnly20Chars(){
  var view = new View();
  view.list.addNote("This is a string longer than 20 chars");
  var id = view.list.getNotes()[0].getID();
  var html = "<ul><li><div><a href='#notes/" + id + "'>This is a string lon</a></div></li></ul>";
  assert.isEq(view.createListHTML(), html);
}

testViewHandlesEmptyList();
testViewReturnsOneNoteAsString();
testViewReturnsTwoNotesAsString();
testViewShowsOnly20Chars();
