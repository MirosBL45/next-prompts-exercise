// http://localhost:300/api/users

const express = require('express');
const app = express();

app.get('/api/users', (res) => {
    const users = [
        { id: 1, name: 'Pajalone' },
        { id: 2, name: 'Sofi' },
        { id: 3, name: 'Mikalone' }
    ];

    res.json(users);
});

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});

export async function GET(request) {
    return new Response('Hello, Next.JS')
}