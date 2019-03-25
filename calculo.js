let estudiante ={
    nombre: 'juan',
    edad:'24',
    notas:{
        mate:3,
        ingles:3,
        programacion:5
    }
    
};
let getprom = (nota1,nota2,nota3)=> (nota1+nota2+nota3)/3;
module.exports = {
    estudiante,
    getprom
};