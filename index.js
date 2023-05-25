const express = require('express');
const axios = require('axios');

const app = express();
const port = 3000;

// Função para enviar uma mensagem de texto
async function sendMessage(token, chatId, messageText) {
    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
        const response = await axios.post(url, {
            chat_id: chatId,
            text: messageText
        });

        if (response.status === 200) {
            console.log('Mensagem enviada com sucesso!');
        } else {
            console.log('Erro ao enviar a mensagem:', response.data);
        }
    } catch (error) {
        console.error('Erro ao enviar a mensagem:', error.message);
    }
}

// Rota para enviar a mensagem via GET com a temperatura
app.get('/mensagem/:temperatura', (req, res) => {
    const token = 'seu_token';
    const chatId = 'seu_chat_id';
    const temperatura = req.params.temperatura;
    const messageText = `TEMPERATURA: ${temperatura}`;

    sendMessage(token, chatId, messageText);

    res.send('Mensagem enviada!');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});