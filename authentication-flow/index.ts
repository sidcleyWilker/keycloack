import express from 'express';

const app = express();

app.get('/', (req,res) => {
    res.send('Ola pessoal');
});

app.listen(3000, () => {
    console.log("escutando na porta 3000");
});