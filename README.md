Site Refugee Home - Trabalho Ricardo 08/06 - Universidade Vila Velha ES

form.addEventListener("submit", () =>: adiciona uma escuta de envio, que faz com que as validações que são realizadas
por meio das estrturas de seleção(if, else if, else) que estão dentro dessa função, só irão acontecer se clicar no botão "enviar".

if (emailInput.value.length == 0): Nessa estrtura de seleção(if) ocorre a validação se o valor(tamanho) da variável 
"emailInput" for igual 0, irá soltar um alert com a mensagem: "Digite o Email".

else if (senhaInput.value.length == 0): Nessa estrtura de seleção(else if) ocorre a validação se o valor(tamanho) da variável 
"senhaInput" for igual 0, irá soltar um alert com a mensagem: "Digite a Senha".

else if (emailInput.value !== email || senhaInput.value !== senha) : Nessa estrtura de seleção(else if) ocorre a validação se 
o valor(tamanho) da variável "emailInput" e "senhaInput" forem diferentes respectivamente ao valor da variável "email" e "senha",
irá soltar um alert com a mensagem: "Acesso Negado"

else: Caso passar por todas as condições anteriores e o resultado for falso, irá soltar um alert com a mensagem: "Bem vindo ao Refugee
Home."

function onClickCad(): Caso a pessoa clique no "Cadastra-se", essa função irá soltar um alert com a mensagem: 
"Acesse refugee.com.br/cadastro para saber mais." 

function onClickSenha(): Caso a pessoa clique no "Esqueceu a senha", essa função irá soltar um alert com a mensagem:
"Acesse refugee.com.br/redefinirsenha para saber mais."
