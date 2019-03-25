
const fs = require('fs')
let opciones ={
    matematicas:{
        default:0,
        alias:'m',
        id:1,
        valor:0,
        long:100,
        nombre:'Matematicas'
    },
    ingles:{
        default:0,
        alias:'i',
        id:2,
        valor:20000,
        long:10,
        nombre:'ingles'
    },programacion:{
        demand:true,
        alias:'p',
        id:3,
        valor:1200000,
        long:40,nombre:'programacion'
    }
}

const opciones2 ={
    id:{
        demand: true,
        alias: 'i' 
    },
    nombre:{
        demand: true,
        alias: 'n'       
    },cedula:{
        demand: true,
        alias: 'x'        
    }
}

let crearArchivo =(texto)=>{
    texto =  ' usuario: '+argv.n+' cédula: '+argv.x +' curso:  '+texto;
    fs.writeFile('curso.txt',texto,(err)=>{
    if(err) throw(err);
    console.log('Se ha creado el archivo')
    });   
}

const argv = require('yargs')
        .command('inscribir','Inscribirse a un curso',opciones2).argv

function cursoDescripcion (opcion,callback){
    let texto= 'El curso con id '+opcion.id+' se llama '+ opcion.nombre+' tiene una duración de:  '+
    opcion.long + ' horas y tiene un valor de: '+opcion.valor ;
    setTimeout(function(){
    callback(texto);
    },2000*opcion.id)
}


if(argv.i==opciones.matematicas.id){
crearArchivo('Matemáticas valor 0 horas 100');
}else if (argv.i==opciones.programacion.id){
    crearArchivo('Programación valor 1200000 horas 40');
}
else if  (argv.i==opciones.ingles.id){
    crearArchivo('Ingles valor 20000 horas 10');
}else{
    console.log('Ese curso no es parte de los cursos ofertados, seleccione uno nuevamente.')
}
cursoDescripcion(opciones.matematicas,function(resultado){
    console.log(resultado);
})
cursoDescripcion(opciones.ingles,function(resultado){
    console.log(resultado);
})
cursoDescripcion(opciones.programacion,function(resultado){
    console.log(resultado);
})





