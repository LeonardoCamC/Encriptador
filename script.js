const textArea = document.querySelector(".encriptar");
const textMensaje = document.querySelector(".evaluar");

const munieco = document.querySelector(".munieco");
const parrafoUno = document.querySelector(".primerMensaje");
const parrafoDos =  document.querySelector(".segundoMensaje");

const btn_Copiar = document.querySelector(".btn-copiar");

const matriz_codigo = [
    ["e", "enter"], //indice 0
    ["i", "imes"], //indice 1
    ["a", "ai"], //indice 2
    ["o", "ober"], //indice 3
    ["u", "ufat"], //indice 4
];

function btnEncriptar() {

    const contenido =  textArea.value;
    const patron = /^[a-z\s]+$/;

    if (patron.test(contenido)) {
        const texto = encriptar(contenido);
        textMensaje.value = texto;
        textArea.value = "";
        munieco.style.display = "none";
        parrafoUno.style.display = "none";
        parrafoDos.style.display = "none";
        btn_Copiar.style.display = "block";
    } else{
        alert("Ingrese solo letras minúsculas y sin caracteres especiales.");
    }  
}

function encriptar(fraseEncriptada){

    for (let i = 0; i < matriz_codigo.length; i++){
        if(fraseEncriptada.includes(matriz_codigo[i][0])){
            fraseEncriptada = fraseEncriptada.replaceAll(
                matriz_codigo[i][0],
                matriz_codigo[i][1]
            );
        }

    }
    return fraseEncriptada;
}

function btnDesencriptar() {
    const texto = desencriptar(textArea.value);
    textArea.value = "";
    textMensaje.value = texto;
    munieco.style.display = "none";
    parrafoUno.style.display = "none";
    parrafoDos.style.display = "none";
    btn_Copiar.style.display = "block";
}

function desencriptar(fraseDesencriptada){
    fraseDesencriptada =  fraseDesencriptada.toLowerCase();
    for (let i = 0; i < matriz_codigo.length; i++){
        if(fraseDesencriptada.includes(matriz_codigo[i][1])){
            fraseDesencriptada = fraseDesencriptada.replaceAll(
                matriz_codigo[i][1],
                matriz_codigo[i][0]
            );
        }
    }
    return fraseDesencriptada;
}

function btnCopiar() {
    const textoSalida = document.querySelector(".evaluar");
    textoSalida.select();
    document.execCommand("copy");
    textMensaje.value ="";
    munieco.style.display = "block";
    parrafoUno.style.display = "none";
    parrafoDos.style.display = "block";
    btn_Copiar.style.display = "none";

    alert("Texto Copiado");
}


