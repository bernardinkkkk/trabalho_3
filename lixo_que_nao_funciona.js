function adicionar(valor){
    document.getElementById('campo').value += valor;
}
function limpar(){
    document.getElementById('campo').value = "";
}
function calcular(){
    var visor = document.getElementById('campo');
    try{
        campo.value = eval(campo.value);
    }catch(error){
        visor.value = 'Error';
    }
}