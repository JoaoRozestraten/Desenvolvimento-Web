const express = require('express');
const bodyParser = require('body-parser');
const port = 3000;

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/send', (req, res) => {
  const { name, email, message } = req.body;
  console.log(`Nome: ${name}, E-mail: ${email}, Mensagem: ${message}`);
  res.send('Formulário enviado com sucesso!');
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});