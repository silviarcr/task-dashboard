dt.view.criarTask = {
    setupUserInterface: function () {
        var saveButton = document.forms['task'].commit;
        // load all task objects
        task.loadAll();
        // Set an event handler for the save/submit button
        saveButton.addEventListener("click",
            dt.view.criarTask.handleSaveButtonClickEvent);
        window.addEventListener("beforeunload", function () {
            task.saveAll();
        });
    },
    handleSaveButtonClickEvent: function () {
        var formEl = document.forms['task'];
        if( formEl.done.checked === true){
            console.log("se cria e coloca tasck como done");
             }
        var attr = {
            titulo: formEl.titulo.value,
            descricao: formEl.descricao.value,
            prioridade: formEl.prioridade.value,
            usuario: formEl.usuario.value,
            done: formEl.done.checked
        };
        task.add(attr);
        formEl.reset();
    }
};