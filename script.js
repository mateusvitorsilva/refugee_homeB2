var email = "refugeeanfitrian@gmail.com"
var senha = "senhapadrao"
var emailInput = document.querySelector("#email")
var senhaInput = document.querySelector("#senha")
var form = document.getElementsByTagName("form")[0]
form.addEventListener("submit", () => {
  

  if (emailInput.value.length == 0) {
    alert("Digite o Email")
  }
  else if (senhaInput.value.length == 0) {
    alert("Digite a Senha")
  }
  
  else if  (emailInput.value !== email || senhaInput.value !== senha) {
    alert("Acesso negado")
  }
  else {
    location.href = "http://127.0.0.1:5500/anfitriahome.html";
    alert("Bem vindo ao Refugee Home.")

  }
})

function onClickCad(){
  alert("Acesse refugee.com.br/cadastro para saber mais.")
}
function onClickSenha(){
  alert("Acesse refugee.com.br/redefinirsenha para saber mais.")
}
