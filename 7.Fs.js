const fs = require("fs");

// console.log(fs)

const first = fs.readFileSync("./data/first.txt", "utf-8"); //--> Leer el contenido del archivo

const text = "Este es un texto añadido desde JS \n";

fs.writeFileSync("./data/third.txt", text, {
    flag: 'a'
});

console.log(first);
