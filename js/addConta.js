
//variavel para receber o id do botao adicionar
var botaoAdicionar = document.querySelector('#botaoAdicionar');
//criando evento para o botao adicionar ao ser clicado
botaoAdicionar.addEventListener("click", function (event) {
    event.preventDefault();
    //variavel recebe a form de adicionar
    var form = document.querySelector("#form-add-conta");
    //variavel novaConta recebe retorno da funcao getNovaConta com os novos dados dos inputs digitados
    var novaConta = getNovaConta(form);

    console.log('OS VALORES SAO', novaConta);

    //criando TR e TD 
    var contaTr = document.createElement("tr"); 

    console.log('CRIANDO A TR', contaTr);
    console.log('TR VALOR', novaConta.inputNovoValor);

    var descricaoTd = document.createElement("td");
    var valorTd = document.createElement("td");
    var obsTd = document.createElement("td");

    //pegando valores para dentro dos inputs. Para isso declara a funcao e a variavel dentro dela "novaConta.variavel"
    descricaoTd.textContent = novaConta.inputNovoDescricao;
    valorTd.textContent = novaConta.inputNovoValor;
    obsTd.textContent = novaConta.inputNovoObs;

    valorTd.textContent.toLocaleString();
    console.log('VALOR TD CONVERTIDO', formatReal(valorTd));

   
   //criando as TDS como elementos filhos dentro da TR contaTR
    contaTr.appendChild(descricaoTd);
    contaTr.appendChild(valorTd);
    contaTr.appendChild(obsTd);

    //pegando a tabela das contas
    var tabela = document.querySelector("#tabelaContas");
    //injetando contaTr dentro da tabela de contas    
    tabela.appendChild(contaTr);
})

//Captura dos values dos inputs com novos dados e retorna na variavel novaConta
function getNovaConta(form) {
    var novaConta = {
        inputNovoDescricao: form.inputDescricaoConta.value,
        inputNovoValor: form.inputValorConta.value,
        inputNovoObs: form.inputObsConta.value,
    }
    return novaConta;
}

