'use strict';

const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send('Teste');
});

app.use(
    '/WoodRiver/Pages/Cor/cor.html',
    express.static(path.join(__dirname, 'WoodRiver', 'Pages', 'Cor', 'cor'))
  );
  


// escutar porta
app.listen(port, () => {
    console.log(`Servidor rodando na porta http://localhost:${port}`);
});
