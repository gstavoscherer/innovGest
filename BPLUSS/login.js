function abrirPainel(){
    document.getElementById("abareal").style.height = '150px';
    document.getElementById("pabareal01").style.color = 'black';
    document.getElementById("pabareal02").style.color = 'black';
    document.getElementById("abarealimg").style.width = '20px';

}
function fecharPainel(){
    document.getElementById("abareal").style.height = '0px';
    document.getElementById("pabareal01").style.color = 'transparent';
    document.getElementById("pabareal02").style.color = 'transparent';
    document.getElementById("abarealimg").style.width = '0px';
}