const perguntas = ['1+1','2+2','3+3'];
const respostas = ['2','4','16','7','9','4','6','8','9'];
const pont = [1,0,0,0,0,1,1,0,0];
let i = 0;
let pontos = 0;
let selecao = ['0','0','0'];
let aux = document.getElementById('op');
definir_pergunta()
function definir_pergunta()
{
    //document.getElementById('p').innerHTML = perguntas[i];
    let a=i*3;
    document.getElementById('controle').innerHTML = (i+1) + '/3';

    document.getElementById('pergunta').innerHTML = perguntas[i];
    var select = document.getElementById("select-perguntas");
    select.options[select.options.length] = new Option(respostas[a], '0');
    select.options[select.options.length] = new Option(respostas[a+1], '1');
    select.options[select.options.length] = new Option(respostas[a+2], '2');
    
    document.getElementById('selecaoview').innerHTML = selecao;
    //opt2.value = "2";
    //opt2.text = respostas[a+1];
    //opt3.value = "3";
    //opt3.text = respostas[a+2];
    //select.add(opt2, null);
    //select.add(opt3, null);
    
    var selectElement = document.getElementById('select2');
    selectElement.add(new Option(respostas[a], '1'));
    selectElement.add(new Option(respostas[a+1], '2'));
    selectElement.add(new Option(respostas[a+2], '3'));
    var selecao2 = selectElement.value;

    //document.getElementById('op1').innerHTML = respostas[a];
    //document.getElementById('op2').innerHTML = respostas[a+1];
    //document.getElementById('op3').innerHTML = respostas[a+2];
}
function proxima_pergunta()
{
    
    selecao[i] = document.getElementById("select-perguntas").value;
    document.getElementById('select-perguntas').options.length = 0;
    document.getElementById('select2').options.length = 0;
    i=i+1;
    if(i>=2)
    {
        i=2;
    }
    definir_pergunta();
}
function conferir()
{
    let k = 0;
    while(k<3)
    {
        let r = k*3;
        let m = Number(selecao[k]);
        pontos = pontos + pont[m+r];


        k = k+1;
    }
    document.getElementById('pontos').innerHTML = 'pontos:'+pontos;
}
document.getElementById('op').innerHTML = aux;
