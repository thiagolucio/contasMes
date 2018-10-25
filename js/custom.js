

var title = document.querySelector(".tituloApp");
title.textContent = "Controle de Contas Mensais";

var mesVigente = document.querySelector(".nomeMes");
mesVigente.textContent = "Outubro";

//Seleciona todos os valores da tr da tabela
var contas = document.querySelectorAll(".tr-conta");

for (var i = 0; i < contas.length; i++) {
    var conta = contas[i];
    
    var valorTotal = 0;

    //Descricao de conta
    var td_descricao = conta.querySelector(".td-descricao-conta");
    var descricao = td_descricao.textContent;
    //Valor de conta
    var td_valor = conta.querySelector(".td-valor-conta");    
    var valor = td_valor.textContent;
    

    console.log('VALOR', valor);
    console.log('VALOR TOTAL', valorTotal);

    //Observacao de conta
    var td_obs = conta.querySelector(".td-obs-conta");
    var obs = td_obs.textContent;  

    if (descricao == "") {
        td_descricao.textContent = "Descrição está vazio!";
        td_descricao.classList.add("errorColor"); 
    }
    if (valor == "") {
        td_valor.textContent = "Valor está Vazio!";
        td_valor.classList.add("errorColor");
    }
    if (obs == "") {
        td_obs.textContent = "Observação está Vazio!";
        td_obs.classList.add("errorColor");
    }
}

function exportaValorTotal(valorTotal) {
    var valorTotal = valor;
    return valorTotal;
}