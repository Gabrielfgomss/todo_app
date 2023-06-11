import express from 'express';

const app = express();
const PORT = process.env.PORT;

app.listen(PORT, (error) => {
  if(!error) console.log(`Server rodando na porta ${PORT}`)
  else console.log('Erro no server!')
})