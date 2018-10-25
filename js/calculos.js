 var els = document.getElementsByClassName("td-valor-conta");
  var valorcalculado = 0;
  [].forEach.call(els, function (el) 
  {
    valorcalculado += parseInt(el.innerHTML);
  });

  document.getElementById("somaTotal").innerHTML = valorcalculado;