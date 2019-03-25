function prom (nota_uno, nota_dos,nota_tres){
    let resultado= (nota_uno+nota_dos+nota_tres)/3
    console.log(resultado);
}

function prom4 (nota_uno, nota_dos,nota_tres){
    let resultado= (nota_uno+nota_dos+nota_tres)/3
    setTimeout(function(){
    console.log(resultado);
    },0)
}

let prom2= (nota_uno, nota_dos,nota_tres)=>  console.log(nota_uno+nota_dos+nota_tres);

let promCallback =(nota_uno, nota_dos,nota_tres,callback) =>
    setTimeout(function(){
    let resultado=(nota_dos+nota_tres+nota_uno)/3;
    callback(resultado);
 },2000);

promCallback(5,42,5,function(resultado){
    console.log(resultado);
})
