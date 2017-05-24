'use scrict';

function testControllerInitialisesWithList() {
  var controller = new Controller();
  assert.isArray(controller.list.getNotes());
}

testControllerInitialisesWithList();

function testControllerCreatesView() {
  var controller = new Controller();
  controller.list.addNote("Note");
  assert.isEq(controller.view.createListHTML(),"<ul><li><div>Note</div></li></ul>");
}

testControllerCreatesView();
