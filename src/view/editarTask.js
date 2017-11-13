dt.view.editarTask = {
  setupUserInterface: function () {
    var formEl = document.forms['task'],
      saveButton = formEl.commit,
      selecionarTaskEl = formEl.selecionarTask;
    var i = 0, key = "", keys = [], _task = null, optionEl = null;
    // load all task objects
    task.loadAll();
    // populate the selection list with tasks
    keys = Object.keys(task.instances);

    for (i = 0; i < keys.length; i++) {
      key = keys[i];
      _task = task.instances[key];
      //  if (_task.done === true) {
      //    return;
      //  }

      if (_task.titulo !== '' && _task.titulo !== null && typeof _task.titulo !== 'undefined') {
        optionEl = document.createElement("option");
        optionEl.text = _task.titulo;
        selecionarTaskEl.add(optionEl, null);
      }

    }
    // when a task is selected, populate the form with the task data
    selecionarTaskEl.addEventListener("change", function () {

      var _task = null, key = selecionarTaskEl.value;


      if (key) {
        _task = task.instances[key];
        formEl.titulo.value = _task.titulo;
        formEl.descricao.value = _task.descricao;
        formEl.prioridade.value = _task.prioridade;
        formEl.usuario.value = _task.usuario;
        formEl.done.checked = _task.done;

      } else {
        formEl.titulo.value = "";
        formEl.descricao.value = "";
        formEl.prioridade.value = "";
        formEl.usuario.value = "";
      }
    });
    saveButton.addEventListener("click",
      dt.view.editarTask.handleUpdateButtonClickEvent);
    window.addEventListener("beforeunload", function () {
      task.saveAll();
    });
  },
  // save updated data
  handleUpdateButtonClickEvent: function () {
    var formEl = document.forms['task'];
    var attr = {
      titulo: formEl.titulo.value,
      descricao: formEl.descricao.value,
      prioridade: formEl.prioridade.value,
      done: formEl.done.checked,
      usuario: formEl.usuario.value
    };
    task.update(attr);
    formEl.reset();
  }
};