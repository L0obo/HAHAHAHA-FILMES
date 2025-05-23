const express = require('express');
const cors = require('cors');
const movieRoutes = require('./routes/movieRoutes');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.use('/movies', movieRoutes);

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});