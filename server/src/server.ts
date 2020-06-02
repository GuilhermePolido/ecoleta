import express from 'express';

const app = express();

app.get('/users', (request, response) => {
    response.json(['guilherme', 'sdoskod', 'dsad']);
})

app.listen(3333);