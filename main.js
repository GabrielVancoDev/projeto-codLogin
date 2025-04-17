// Configura acesso para a tela de login
function acessar() {
  let loginEmail = document.getElementById("loginEmail").value;
  let loginSenha = document.getElementById("loginSenha").value;

  // Implementa estrutura que testa se todos os campos foram preenchidos

  if (!loginEmail || !loginSenha) {
    alert("Favor preencher todos os campos");
  } else {
    window.location.href = "cadastro.html";
  }
}

// Cria varável de tipo array
var dadosLista = [];

function salvarUser(){
    let nomeUser = document.getElementById("nomeUser").value;
    
    if(nomeUser){
        dadosLista.push(nomeUser)
        console.log(dadosLista)
        let nomeUser = document.getElementById("nomeUser").value = "";

    }
}
