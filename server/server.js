import 'dotenv/config.js';
import app from './src/app.js';

const PORT = 3000;

app.listen(PORT, (error) => {
  if (!error) console.log(`Server rodando na porta ${PORT}`);
  else console.log('Erro no server!');
});
