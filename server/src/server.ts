import express from 'express'

const app = express();

app.get('/users', (request, response) => {
    console.log('Listagem de usuários');

    // JSON

    response.json([
        'Renaldo',
        'Anderson',
        'Paulo',
        'Luis'
    ]);
});

app.listen(3333);