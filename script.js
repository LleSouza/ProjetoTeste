// chamando a funçao insert para adicionar os números digitados pelo usuário e retornando o que foi digitado na tela.
function insert(num){
  var numero =  document.getElementById('resultado').innerHTML;
  document.getElementById('resultado').innerHTML = numero + num;
}

// Chamando a função clean  para limpar o que foi digitado pelo usuário de uma vez. 
function clean(){
  document.getElementById('resultado').innerHTML = " ";
}

// Chamando a função Back para diminuir um numero que foi digitado , apagando um por um.
function back(){
   var resultado = document.getElementById('resultado').innerHTML;
   document.getElementById('resultado').innerHTML = resultado.substring(0,resultado.length -1);
}

// Chamando a função calcular , essa função é responsavel por calcular os números seja multiplicação, divisão , adição ou subtração

function calcular (){
  var resultado = document.getElementById('resultado').innerHTML;
  // Se tiver algo para calcula esse laço vai computar e o resultado vai aparecer na tela.
  if(resultado){
    document.getElementById('resultado').innerHTML = eval(resultado);
  }
  // se não tiver nenhum valor para calcular exibe a seguinte mensagem
  else{
    document.getElementById('resultado').innerHTML = " "

  }
}






