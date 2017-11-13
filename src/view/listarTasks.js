dt.view.listarTasks = {
  setupUserInterface: function () {
    var tableBodyEl = document.querySelector("table#tasks>tbody");
    var i = 0, keys = [], key = "", row = {};
    // load all task objects
    task.loadAll();
    keys = Object.keys(task.instances);
    // for each task, create a table row with a cell for each attribute
    console.log(keys.length);
    for (i = 0; i < keys.length; i++) {
      key = keys[i];
      row = tableBodyEl.insertRow();
      row.insertCell(-1).textContent = task.instances[key].titulo;
      row.insertCell(-1).textContent = task.instances[key].descricao;
      row.insertCell(-1).textContent = task.instances[key].prioridade;
      row.insertCell(-1).textContent = task.instances[key].usuario;

      var status;
      if (task.instances[key].done === true) {
        status = "Concluída por " + task.instances[key].usuario;
      }
      else {
        console.log(i);
        status = "Não concluída";
      }
      row.insertCell(-1).textContent = status;
    }
  }
};