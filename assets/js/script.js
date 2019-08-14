function multiplicar() {

    var campo1 = document.getElementById("campo1").value;
    var campo2 = document.getElementById("campo2").value;

    var resultado = document.getElementById("resultado").value;

    var mult = campo1 * campo2;

    if (mult == resultado) {
        alert("Parabéns você acertou, continue assim!!!")
        
    } else{
        alert("Você errou, estude um pouco mais e tente novamente!!!")
    }
    resetar();
    
}

function resetar() {
    document.getElementById("campo1").value = "";
    
    document.getElementById("campo2").value = "";

    document.getElementById("resultado").value = "";
    
}