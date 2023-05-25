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

// Rota para enviar a mensagem de alerta
app.get('/mensagem/alert/:temperatura', (req, res) => {
    const token = '6053515990:AAG0G781j1g7PAYUx6t0nmJljV5RcMLSQXc';
    const chatId = '1624643673';
    const temperatura = req.params.temperatura;
    const messageText = `🚨🚨 TEMPERATURA ALTA DEMAIS! 🚨🚨 Temperatura: ${temperatura}°C`;

    sendMessage(token, chatId, messageText);

    res.send('Mensagem de alerta enviada!');
});

// Rota para enviar a mensagem de média
app.get('/mensagem/media/:temperatura', (req, res) => {
    const token = '6053515990:AAG0G781j1g7PAYUx6t0nmJljV5RcMLSQXc';
    const chatId = '1624643673';
    const temperatura = req.params.temperatura;
    const messageText = `ℹ️ Média das últimas 10 temperaturas: ${temperatura}°C`;

    sendMessage(token, chatId, messageText);

    res.send('Mensagem de média enviada!');
});

// Iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});



