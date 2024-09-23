//FONTE
//https://cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service?hl=pt-br
const express = require('express');
const path = require('path');

const app = express();
const port = 3000;
app.use(express.static(path.join(__dirname, 'public')));
const content = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA';
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

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.sendFile(path.join(__dirname, 'public', 'index.html'));
    } else if (req.url === '/about') {
        res.statusCode = 200;
        res.sendFile(path.join(__dirname, 'public', 'about.html'));
    } 
    else  if (req.method === 'POST' && req.url === '/upload') {
        let fileData = '';
        req.on('data', chunk => {
            fileData += chunk.toString();
        });
        req.on('end', () => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'text/plain; charset=utf-8');
            res.end('Upload simulado com sucesso!');
        });
        //way 2
        fs.writeFile('', content, err => {
            if (err) {
              console.error(err);
            } else {
              // file written successfully
            }
          });
        
    }
    else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>404 Não Encontrado</h1><p>A página que você está procurando não existe.</p>');
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});