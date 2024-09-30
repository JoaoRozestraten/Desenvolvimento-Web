const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

// Servindo arquivos estáticos como CSS, imagens, etc., da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

// Rota GET para servir o formulário HTML no caminho /send
app.get('/send', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html')); // Serve o index.html
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});