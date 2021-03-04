function media(){
var n1= document.getElementById("nota1").value;
var n2 = document.getElementById("nota2").value;
var soma = ((parseInt(n1) + parseInt(n2))/2);
if(soma >= 9.1 && soma <= 10){
  console.log("Aprovado!! | Conceito: A | Média: "+ soma);
}
else if( soma >= 7.6 && soma <= 9.0){
  console.log("Aprovado!! | Conceito: B | Média: "+ soma);
}
else if( soma >= 6.1 && soma <= 7.5){
  console.log("Aprovado!! | Conceito: C | Média: "+ soma);
}
else if( soma >= 4.1 && soma <= 6.0){
  console.log("Reprovado!! | Conceito: D | Média: "+ soma);
}
else if( soma <= 4.0 || soma < 0){
  console.log("Reprovado!! | Conceito: E | Média: "+ soma);
}else{
  console.log("Digite suas Notas!")
}
}