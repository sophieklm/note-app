'use strict';

var list = new List();

function testNoteListHoldsNotes() {
  assert.isArray(list._notes);
}

testNoteListHoldsNotes();

function testNoteListReturnsNotes() {
  assert.isArray(list.getNotes());
}

testNoteListReturnsNotes();

function testListStoresSingleNote(){
  list.addNote("say hello");
  assert.isEq(list.getNotes()[0].getText(), "say hello");
  }

testListStoresSingleNote();

function testListStoresMultipleNotes() {
  var list = new List();
  list.addNote("string1");
  list.addNote("string2");
  assert.isTrue(list.getNotes()[1].getText() === "string2");
}

testListStoresMultipleNotes();
