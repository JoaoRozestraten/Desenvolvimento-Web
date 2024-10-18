const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const session = require('express-session');
const path = require('path');

const app = express();
const PORT = 3000;

// Configura o Express para servir arquivos estáticos da pasta 'public'
app.use(express.static(path.join(__dirname, 'public')));

app.use(bodyParser.urlencoded({ extended: true }));
app.use(session({
    secret: 'segredo_super_secreto',//Palavra de segurança para assinar cookies
    resave: false,
    saveUninitialized: true,
}));

// Guardar todos os users cadastrados
const users = [];

// Rota principal (serve o index.html por padrão)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rota para registrar novos usuários
app.post('/register', async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    users.push({ username, password: hashedPassword });//DENTRO DE USERS
    res.redirect('/login.html'); // Redireciona para a página de login após o registro
});

// Rota de login
app.post('/login', async (req, res) => {
    const { username, password } = req.body;
    const user = users.find(user => user.username === username);
    
    if (!user) {
        return res.send('Usuário não encontrado.');
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (validPassword) {
        req.session.username = username;
        res.send(`Login bem-sucedido! Bem-vindo, ${username}`);
    } else {
        res.send('Senha incorreta.');
    }
});

// Rota de logout
app.get('/logout', (req, res) => {
    req.session.destroy(err => {
        if (err) {
            return res.send('Erro ao sair.');
        }
        res.redirect('/'); // Redireciona para a página principal após logout
    });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
