const chalk = require('chalk');
const http = require('http');

const host = 'localhost';

const port = '8000';

const server = http.createServer((req, res) => {

    //console.log("Diego");

    res.write(JSON.stringify({ nombre: "Diego", mensaje: "Hola" }))

    res.end();

});

server.listen(port, host, () => {

    console.log(chalk.green(`http://${host}:${port}`));

});