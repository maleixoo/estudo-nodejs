const http = require('http')
const host = 'http://localhost'
const port = 3000
const stats = require('./pcRamUsage')
const data = require('./pcRamUsage')

////////// EXERCICIO AULA ///////////
/*http.createServer((req, res) => {
    let url = req.url
    if (url === '/stats'){
        res.end(JSON.stringify(stats, null, 2))
    } else{
        res.end('<h1>Seja bem vindo.</h1>')
    }
}).listen(port, () => console.log(`Server is running in ${host}:${port}`))*/

////////// PRATICA //////////
http.createServer((req, res) => {
    let url = req.url
    if (url === '/data'){
        res.end(JSON.stringify(data, null, 2))
    } else{
        res.end('<h1>DB Info.</h1>')
    }
}).listen(port, () => console.log(`Server is running in ${host}:${port}`))