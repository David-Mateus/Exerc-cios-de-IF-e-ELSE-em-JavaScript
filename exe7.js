function horario(){
  var horarioo = document.getElementById("char").value;
  horarioo = horarioo.toUpperCase();
  
  if(horarioo == 'M'){
    alert("Bom Dia!!");

  }else if(horarioo==='V'){
    alert("Boa tarde!!");
    

  }else if(horarioo=='N'){
    alert("Boa noite");

  }else{
    alert("Valor inválido!")
  }
}
