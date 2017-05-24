function init() {

  controller = new Controller();
  controller.list.addNote("Note1");
  controller.list.addNote("Note2");
  controller.getHTMLView();
  controller.makeURLChangeShowNoteForPage();

}

window.onload = init;
