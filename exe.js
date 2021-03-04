// var letra = prompt("Digite uma letra: ").toLowerCase();

// if(letra === "a" || letra === "e" || letra === "i" | letra === "o" |letra === "u"){
//   console.log ("é vogal")
// }else{
//   console.log("é consoante")
// };
function check(){
  var letra = document.getElementById("char").value;
  letra = letra.toLocaleLowerCase();

  if(letra == 'a' || letra == 'e' || letra =='i' || letra == 'o' || letra =='u'){
  prompt("vogal")
  }
  else{
    alert("consoante")
  }
}
// ===================================//
