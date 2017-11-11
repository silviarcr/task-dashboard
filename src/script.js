var botao = document.getElementById("botao");
var modal = document.getElementById("modal");
var fundo = document.getElementById("fundo");
var botaoFechar = document.getElementById("botaoFechar");

botao.onclick = function () {
    fundo.classList.add("visivel");
}
botaoFechar.onclick = function () {
    fundo.classList.remove("visivel");
}
fundo.onclick = function (e) {
    if (e.target == fundo) {
        fundo.classList.remove("visivel");
    }
}

// Login
function OnSubmitForm() {
    var email = document.getElementById("email");
    var senha = document.querySelector("#senha");
    var modal = document.querySelector("#modal");

    if (email.value.toLowerCase().includes("@gmail.com")) {
       document.formlogin.action = "principal.html";
    }
    else {
        alert("Precisa usar conta do Google para cadastro");
        document.formlogi.action = "index.html";
    }
    return true;
}