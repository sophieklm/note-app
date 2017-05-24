var note = new Note("My favourite language is JavaScript");

function testNoteInitializesWithText(){
  assert.isTrue(note._text === "My favourite language is JavaScript");
}

testNoteInitializesWithText();

function testNoteTextCanBeRetrieved(){
  assert.isEq(note.getText(), "My favourite language is JavaScript");
}

testNoteTextCanBeRetrieved();

function testNoteHasID(){
  assert.isEq(note.getID(), 0);
}

testNoteHasID();

function testNoteIDIncrements(){
  var newnote = new Note("String");
  assert.isEq(newnote.getID(), 1);
}

testNoteIDIncrements();
