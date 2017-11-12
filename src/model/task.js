
function task(attr) {
    this.titulo = attr.titulo;
    this.descricao = attr.descricao;
    this.prioridade = attr.prioridade;
    this.usuario = attr.usuario;
};

//load all
task.instances = {};

task.convertRow2Obj = function (taskRow) {
    var _task = new task(taskRow);
    return _task;
};


task.loadAll = function () {
    var i = 0, key = "", keys = [], taskTableString = "", taskTable = {};
    try {
        if (localStorage["taskTable"]) {
            taskTableString = localStorage["taskTable"];
        }
    } catch (e) {
        alert("Erro ao ler LocalStorage\n" + e);
    }
    if (taskTableString) {
        taskTable = JSON.parse(taskTableString);
        keys = Object.keys(taskTable);
        console.log(keys.length + " tasks loaded.");
        for (i = 0; i < keys.length; i++) {
            key = keys[i];
            task.instances[key] = task.convertRow2Obj(taskTable[key]);
        }
    }
};


//save all
task.saveAll = function () {
    var taskTableString = "", erro = false,
        nmrOfTasks = Object.keys(task.instances).length;
    try {
        taskTableString = JSON.stringify(task.instances);
        localStorage["taskTable"] = taskTableString;
    } catch (e) {
        alert("Erro ao salvar no LocalStorage\n" + e);
        erro = true;
    }
    if (!erro) console.log(nmrOfTasks + " tasks salvas.");
};

//criar 
// funcao add precisa ver sobre atributo/id
task.add = function (attr) {
    var _task = new task(attr);
    task.instances[attr.titulo] = _task;
    console.log("Task " + attr.titulo + " criada!");

};

//atualizando task precisa ver sobre atributo/id
task.update = function (attr) {
    var _task = task.instances[attr.titulo];

    if (_task.titulo !== attr.titulo) { _task.titulo = attr.titulo; }
    if (_task.descricao !== attr.descricao) { _task.descricao = attr.descricao; }
    if (_task.prioridade !== attr.prioridade) { _task.prioridade = attr.prioridade; }
    if (_task.usuario !== attr.usuario) { _task.usuario = attr.usuario; }

};

//apagando task precisa ver sobre atributo/id
task.destroy = function (titulo) {
    if (task.instances[titulo]) {
        console.log("Task " + titulo + " apagada");
        delete task.instances[titulo];
    } else {
        console.log("Não existe essa task " + titulo + " na base de dados!");
    }
};

task.limparDados = function () {
    if (confirm("Você quer realmente apagar todas as tasks?")) {
        localStorage["taskTable"] = "{}";
    }
};