
  

function exibeDados() {
    var nome = document.getElementById("nome").value;
    var sobreneme = document.getElementById("sobrenome").value;
    var email = document.getElementById("email").value;
    
   
    document.getElementById("resultado").innerHTML = "Seja bem vindo: " + " " + nome + " " +  sobreneme + ", " +  email;
    document.getElementById("img").innerHTML = "<img src='https://cdn.webshopapp.com/shops/94414/files/52440074/flag-of-ukraine.jpg' width='250'>";
}
