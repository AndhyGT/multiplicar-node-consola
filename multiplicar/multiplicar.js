const fs = require("fs");
const colors = require('colors');

let listarTabla = (base, limite = 10) => {

    console.log('======================================='.green);
    console.log(`========Tabla de ${base}===============`.green);
    console.log("=======================================".green);
    for (let i = 1; i <= limite; i++){
        console.log(`${base} * ${i} = ${base * i}`);
    }
};

let crearArchivo = (base, limite = 10) => {
  return new Promise((resolve, reject) => {
    if (!Number(base)) {
      return reject(`El valor introducido ${base} no es un numero`);
    }
    let data = "";

    for (let index = 1; index <= limite; index++) {
      data += `${base} * ${index} = ${base * index}\n`;
    }

    fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
      if (err) reject(err);
      else resolve(`El archivo tabla-${base}.txt se creo`.yellow);
    });
  });
};

module.exports = {
    crearArchivo,
    listarTabla
};
