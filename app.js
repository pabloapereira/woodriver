'use strict';

const express = require('express');
const port = 1010;
const app = express();

app.use(function (req, res, next) {
    // esta permitindo um aceso
    res.setHeader('Access-Control-Allow-Origin', '*');
  
    // define os métodos permitidos
    res.setHeader(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, PATCH, DELETE'
    );
  
    // define os cabeçalhos aceitos nas requisições
    res.setHeader(
      'Access-Control-Allow-Headers',
      'X-Requested-With,content-type'
    );
  
    // Encaminha a requisição para a próxima camada do middleware, ou seja, para o método que irá tratar de fato a requisição
    next();
  });

const resinas = {
  'resinas' : [
    {
      'id': 1,
      'cor': 'azul'
    },
    {
      'id': 2,
      'cor': 'verde'
    },
    {
      'id': 3,
      'cor': 'branco'
    },
    {
      'id': 4,
      'cor': 'preto'
    }
  ]
};

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.send('Nenhuma cor ');
});

app.get('/resinas', (req, res) => {
    res.send(resinas);
});

// escutar porta
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});