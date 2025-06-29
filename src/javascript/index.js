// Espera o carregamento da página
document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".formulario");
    const inputNome = document.getElementById("input-nome");
    const spanErroNome = document.getElementById("nome");
    const inputSobrenome = document.getElementById("input-sobrenome");
    const spanErroSobrenome = document.getElementById("sobrenome");
    const inputEmail = document.getElementById("input-email");
    const spanErroEmail = document.getElementById("email");
    const inputSenha = document.getElementById("input-senha");
    const spanErroSenha = document.getElementById("senha");
    


    // Verificação ao enviar o formulário
    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Impede envio automático
        const email = inputEmail.value.trim();
        const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        

        if (inputNome.value.trim() === "") {
            spanErroNome.innerText = "First Name cannot be empty";
            inputNome.style.borderColor = "red";
        } else {
            spanErroNome.innerText = "";
            inputNome.style.borderColor = "green";
            inputNome.classList.remove("erro");
        }
        if(inputSobrenome.value.trim() === ""){
            spanErroSobrenome.innerText = "Last Name cannot be empty";
            inputSobrenome.style.borderColor = "red";
        }else{
            spanErroSobrenome.innerText ="";
            inputSobrenome.style.borderColor = "green";
        }
        if (email === "") {
            spanErroEmail.innerText = "Email cannot be empty";
            inputEmail.style.borderColor = "red";
            inputEmail.classList.add("erro");
            inputEmail.placeholder = "email@example.com";
        } else if (!emailValido.test(email)) {
            spanErroEmail.innerText = "Looks like this is not an email";
            inputEmail.style.borderColor = "red";
            inputEmail.classList.add("erro");
            inputEmail.placeholder = "email@example.com";
        } else {
            spanErroEmail.innerText = "";
            inputEmail.style.borderColor = "green";
            inputEmail.classList.remove("erro"); 
            inputEmail.placeholder = "Email Address";
        }
        if(inputSenha.value.trim() ===""){
            spanErroSenha.innerText ="Password cannot be empty";
            inputSenha.style.borderColor = "red";
        }else{
            spanErroSenha.innerText ="";
            inputSenha.style.borderColor = "green";
        }

        
    });

    // Faz a mensagem de erro sumir quando começar a digitar
    inputNome.addEventListener("input", function () {
        if (inputNome.value.trim() !== "") {
            spanErroNome.innerText = "";
        }
      
    });
    inputSobrenome.addEventListener("input",function(){
        if(inputSobrenome.value.trim() !== ""){
            spanErroSobrenome.innerText ="";
        }
    });
    inputEmail.addEventListener("input",function(){
        if(inputEmail.value.trim() !== ""){
            spanErroEmail.innerText ="";
        }
    });
    inputSenha.addEventListener("input",function(){
        if(inputSenha.value.trim() !== ""){
            spanErroSenha.innerText ="";
        }
    });
});