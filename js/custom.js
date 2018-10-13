var title = document.querySelector(".tituloApp");
title.textContent = "Controle de Contas Mensais";

var mesVigente = document.querySelector(".nomeMes");
mesVigente.textContent = "Outubro";

var contas = document.querySelectorAll(".tr-conta");


for (var i = 0; i < contas.length; i++) {
    var conta = contas[i];

    //Descricao de conta
    var td_descricao = conta.querySelector(".td-descricao-conta");
    var descricao = td_descricao.textContent;
    //Valor de conta
    var td_valor = conta.querySelector(".td-valor-conta");
    var valor = td_valor.textContent;
    //Observacao de conta
    var td_obs = conta.querySelector(".td-obs-conta");
    var obs = td_obs.textContent;  

    if (descricao == "") {
        td_descricao.textContent = "Descrição está vazio!";
        td_descricao.classList.add("errorColor");
        //conta.style.backgroundColor = "red";
        // var message = "Not be empty";
        // var style =  message.style.color = "#ff0000";

    }
    if (valor == "") {
        td_valor.textContent = "Valor está Vazio!";
        td_valor.classList.add("errorColor");
    }
    if (obs == "") {
        td_obs.textContent = "Observação está Vazio!";
        td_obs.classList.add("errorColor");

    }
// var message = "Não pode ser Vazio";
// if (id == "" && descricao == "" && valor == "" && obs == "") {
//     td_descricao.textContent = message;
//     td_valor.textContent = message;
//     td_obs.textContent = message;
// }
}