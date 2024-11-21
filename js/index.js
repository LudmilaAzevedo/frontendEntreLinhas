document.getElementById("Entrelinhas").style.fontSize = "30px";

function cute() {
    document.getElementById("Entrelinhas").textContent = "Entre Linhas";
}

function achou() {
    document.getElementById("Entrelinhas").textContent = "Bem-vindo(a) a biblioteca Entre Linhas!";
}

document.getElementById("Entrelinhas").addEventListener("mouseout", cute);
document.getElementById("Entrelinhas").addEventListener("mouseover", achou);