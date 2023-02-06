const http = require("http");

//Crear un servidos

const server = http.createServer((req, res) => {
  console.log(req.url);

  if (req.url === "/") {
    res.write("<h1>Welcome to Server</h1>");
    return res.end();
  }

  if (req.url === "/about") {
    res.write("acerca de");
    return res.end();
  }

  res.write(`
    <p>Esta pagina no se ha encontrado</p>
    <p>Esta pagina no se ha encontrado</p>
    <p>Esta pagina no se ha encontrado</p>
    <a href="/">Regresar a la pagina principal</a>
    `);
  res.end();
});
server.listen(5500);

console.log("Servidor iniciado");
