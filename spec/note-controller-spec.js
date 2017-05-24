'use scrict';

var controller = new Controller();

function testControllerCreatesListView() {
  controller.list.addNote("note");
  console.log(controller.getHTMLView());
}

// testControllerCreatesListView();
