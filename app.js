'use strict';

const express = require('express');
const path = require('path');
const port = 3000;
const app = express();

app.get('/', (req, res) => {

});

app.listen(port, err => {
    if (err) {
        return console.log('ERROR', err);
    }
    console.log(`Servidor rodando na porta ${port}`);
});