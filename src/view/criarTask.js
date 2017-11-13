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
       
        var attr = {
            titulo: formEl.titulo.value,
            descricao: formEl.descricao.value,
            prioridade: formEl.prioridade.value,
            usuario: formEl.usuario.value,
            done: formEl.done.checked
        };
        if( formEl.done.checked === true){
            attr.usuarioFinal = attr.usuario;
        }
        else{
            attr.usuarioFinal = "não concluída";
        }
        
        task.add(attr);
        formEl.reset();
    }
};