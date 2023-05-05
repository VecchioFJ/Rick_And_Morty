const express = require('express');
const server = express();
const router = require('./routes/index')
const morgan = require('morgan')
const PORT = 3001;

server.use(express.json());  // middleware la info q llega en json la pasa a js
server.use(morgan('dev'))

server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});

server.use('/rickandmorty', router)

server.listen(PORT, () => {
   console.log(`Server raised in port: ${PORT}`);
});







// Servidor usando http:

// const http = require ('http');
// const { getCharById } = require('./controllers/getCharById')

// http
// .createServer((request,response) =>{
//     response.setHeader('Access-Control-Allow-Origin', '*');  // Permite al front-end hacer peticiones al servidor

//     if(request.url.includes(`/rickandmorty/character`)){
//         const id = request.url.split('/').at(-1);

//         getCharById(response, +id)

//         // response
//         // .writeHead(200, {"Content-type": "aplication/json"})
//         // .end(JSON.stringify(characterFound))
//     }
// })

// .listen(3001)  // si no funciona .listen(3001, 'localhost')