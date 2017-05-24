'use scrict';

function testControllerInitialisesWithList() {
  var controller = new Controller();
  assert.isArray(controller.list.getNotes());
}

testControllerInitialisesWithList();
