const estudiante1 = require('./calculo')
const fs = require('fs')
console.log(estudiante1.estudiante)
console.log('el promedio del estudiante es:una tesis mk jajaa' )

let crearArchivo =(texto)=>{
    fs.writeFile('textacio.txt',texto,(err)=>{
    if(err) throw(err);
    console.log('Se ha creado el archivo')
    });

   
}
 crearArchivo('holi');
