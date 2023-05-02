const button = document.getElementsByName("button")[0];
const tittle = document.getElementById("titulo");
const fundoLogin = document.getElementById("login");
const corFundo = ["antiquewhite", "#871d1d", "white"];
let indiceCor = 0;

(function(title) {
    document.addEventListener("keydown", function(event) {
        if(event.code === "Enter") {
          title.style.color = "red";
        }
    });
})(tittle);

corFundo.unshift("crimson", "rosewood", "purple");
corFundo.sort();

function mudarFundo() {
  fundoLogin.style.backgroundColor = corFundo[indiceCor];
  indiceCor = (indiceCor + 1) % corFundo.length;
}

setInterval(mudarFundo, 5000);

function mudarCor() {
  this.style.background = "green";
  this.style.border = "2px solid green";
}

function desfocar() {
  this.style.background = "#7CE14C";
}

button.addEventListener("focus", mudarCor);
button.addEventListener("blur", desfocar);

function clicar(event) {
  console.log(event.target);
}

function validarCampo(){
  const nome = document.getElementById("ilogin").value;
  const senha = document.getElementById("isenha").value;

  if(nome !== "web2@gmail.com") {
    alert("Email invalido");
    return false;
  }
  
  if(senha !== "123456") {
    alert("Senha incorreta");
    return false;
  }

  return true;
}//3 regras usadas iarbn;