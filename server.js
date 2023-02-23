const express = require('express');
const path = require('path');

const HOST = '127.0.0.1';
const PORT = 3000;

const app = express();

app.use(express.static(path.join(__dirname)));
app.get('/', (request, response) => {
    response.setHeader("Content-Type", "text/html");
    response.sendFile(path.join(__dirname, "static", 'index.html'));
});

app.listen(PORT, HOST, () => {
    console.log(`Running Server on ${HOST}:${PORT}`)
});