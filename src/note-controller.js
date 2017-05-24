(function(exports) {

  function Controller(list = new List()) {
     this.list = list;
     this.view = new View(this.list);
     this.makeURLChangeShowNoteForPage();
  }

  Controller.prototype.getHTMLView = function(){
    html = this.view.createListHTML();
    element = document.getElementById("list");
    element.innerHTML = html;
  };

  Controller.prototype.makeURLChangeShowNoteForPage = function() {
    window.addEventListener("hashchange", this.showNoteForPage());
  };

  Controller.prototype.showNoteForPage = function() {
    this.showNote(this.getNoteFromURL(window.location));
  };

  Controller.prototype.getNoteFromURL = function(location) {
    return location.hash.split("#notes/")[1];
  };

  Controller.prototype.showNote = function(id){
    notes = this.list.getNotes();
    for (var i = 0; i < notes.length; i++){
      if (notes[i].getID() == id) {
        single_note_html = new SingleNoteView(notes[i]).createNoteHTML();
        document.getElementById("list").innerHTML = single_note_html;
      }
    }
  };

  exports.Controller = Controller;
})(this);
