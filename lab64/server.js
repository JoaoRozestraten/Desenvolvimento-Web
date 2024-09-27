//FONTE CONTROLE
//aaaa CONTROLE
//AAAA
//https://cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service?hl=pt-br
const express = require('express');
const path = require('path');
var http = require("http");
const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
const data = 'UM ARQUIVO TEXTO QUALQUER feito pelo aluno joao guadagnucci rozestraten RA:24005941 (Esse arquivo foi criado usando o node)';
let koon =0;
const fs = require('fs');
let a='';
/*
// Configura o Express para servir arquivos estáticos da pasta "public"
app.use(express.static(path.join(__dirname, 'public')));

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página "Sobre"
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Inicia o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
*/

// Rota para a página inicial
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para a página "Sobre"
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'about.html'));
});
//Rota para a pagina "upload"
app.get('/upload', (req, res) => {
    
        res.sendFile(path.join(__dirname, 'public', 'upload.html'));
});
app.post('/upload', (req, res) => {
    
    let fileData = '';
        req.on('data', chunk => {
            fileData += chunk.toString();
        });
        req.on('end', () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end('Upload simulado com sucesso!');
        });
});

app.use((req,res,next)=>{

    res.status(404).send('Pagina Nao encontarda 404 404 404 voce digitou algo errado');
});



///aaaaaaaaaaaaaaaaaaa

///aaaaaaaaaaa





app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});