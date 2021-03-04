function media(){
let nota1 = document.getElementById("char").value;
let nota2 = document.getElementById("chaer").value;

var media = (parseInt(nota1) + parseInt(nota2))/2;

if(media >= 7 && media < 10){
  alert("Parabéns!!! Aprovado")
}else if(media < 7){
  alert("Reprovado" +  media)
}else{
  alert("Aprovado com Distinção")
}
}