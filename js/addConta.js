var btnAdd = document.querySelector('#addConta');

btnAdd.addEventListener("click", function () {
    event.preventDefault();

    var form = document.querySelector("#form-add-conta");
    var novaConta = getNovaConta(form);

    console.log(novaConta);

    var contaTr = document.createElement("tr");
   
    var descricaoTd = document.createElement("td");
    var valorTd = document.createElement("td");
    var obsTd = document.createElement("td");

    
    descricaoTd.textContent = inputNovoDescricao;
    valorTd.textContent = inputNovoValor;
    obsTd.textContent = inputNovoObs;
   
    contaTr.appendChild(descricaoTd);
    contaTr.appendChild(valorTd);
    contaTr.appendChild(obsTd);

    
    var table = document.querySelector("#table-contas");    
    table.appendChild(contaTr);
})

function getNovaConta(form) {

    var novaConta = {
        inputNovoDescricao: form.inputDescricaoConta.value,
        inputNovoValor: form.inputValorConta.value,
        inputNovoObs: form.inputObsConta.value,
    }
    return novaConta;
}