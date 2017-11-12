dt.view.apagarTask = {
  setupUserInterface: function () {
    // var deleteButton = document.forms['task'].commit;
    //  var selectEl = document.forms['task'].apagarTask;
    var formEl = document.forms['task'],
      deleteButton = formEl.commit,
      apagarTaskEl = formEl.apagarTask;

    var i = 0, key = "", keys = [], _task = null, optionEl = null;
    // load all task objects
    task.loadAll();
    keys = Object.keys(task.instances);
    // populate the selection list with task
    for (i = 0; i < keys.length; i++) {
      key = keys[i];
      _task = task.instances[key];

      if (_task.titulo !== '' && _task.titulo !== null && typeof _task.titulo !== 'undefined') {
        optionEl = document.createElement("option");
        optionEl.text = _task.titulo;
        apagarTaskEl.add(optionEl, null);
      }
      
    }
    deleteButton.addEventListener("click",
      dt.view.apagarTask.handleDeleteButtonClickEvent);
    window.addEventListener("beforeunload", function () {
      task.saveAll();
    });
  },
  handleDeleteButtonClickEvent: function () {
    var selectEl = document.forms['task'].apagarTask;
    var titulo = selectEl.value;
    if (titulo) {
      task.destroy(titulo);
      selectEl.remove(selectEl.selectedIndex);
    }
  }
};