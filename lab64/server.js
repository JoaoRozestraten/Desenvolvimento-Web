//FONTE CONTROLE
//aaaa CONTROLE
//AAAA
//https://cloud.google.com/appengine/docs/standard/nodejs/building-app/writing-web-service?hl=pt-br
const path = require('path');
const express = require('express');
const multer = require('multer');
const app = express();
const port = 3000;



app.set('view engine','ejs');

// Configura o armazenamento do multer
const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, "uploads/"); // Pasta onde os arquivos serão salvos
      },
        filename: function(req, file, cb) {
           cb(null, file.originalname + Date.now() + path.extname(file.originalname)); // Adiciona timestamp ao nome do arquivo
      }
});
    


const upload = multer({storage})
//tudo que upar, vai ir pra pasta uploads. é necessário deixar sem a barra no começo para não ir para a pasta node modules.

//app.use(express.static(path.join(__dirname, 'public')));

app.get('/upload', (req, res) => {
    res.render("index");
});

app.get('/', (req, res) => {
   res.sendFile(path.join(__dirname, 'public', 'index.html')); 
});

app.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'about.html'));
});

// Rota para fazer o upload de arquivos
app.post('/upload', upload.single("file"), (req, res) => {
  res.send("Arquivo recebido com sucesso!");
});

// Rota para tratamento de erros 404
app.use((req, res) => {
  res.status(404).send("404 - Página não encontrada - voce deve ter digitado algo errado 404");
});

// Inicia o servidor

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});