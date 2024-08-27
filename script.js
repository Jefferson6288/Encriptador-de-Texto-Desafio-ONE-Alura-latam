const textArea = document.querySelector(".text-area")
const Mensaje = document.querySelector(".textoresultado")

function BtnEncriptar(){
    const TextoEncriptado = encriptar(textArea.value)
    mensaje.value = TextoEncriptado
    textArea.value = "";
}

function encriptar (StringEncriptada){
    let matrizDecodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]]};
    StringEncriptada = StringEncriptada.tolowercase

for(let i = 0; i < matrizDecodigo.length;i++){
    if(StringEncriptada.includes(matrizDecodigo[i][0])){
        StringEncriptada = StringEncriptada.replaceAll(matrizDecodigo[i][0], matrizDecodigo[i][1])
    }}