//Arquivo com rotas para o cadastro de livros
const express = require('express')
const app = express()
const port = 3000 
const livros = require('./routes/livros');
//aplicação pelo método get vai buscar a rota 
// localhost:3000/


//identificação da rota e da const (require) associada
app.use('/livros',livros);
//a rota /livros retorna a lista dos livros cadastrados em formato json

app.get('/', (req, res) => {
  res.send('teste Filipe!')
})
//exemplo relacionado a filmes localhost:3000/filmes
app.use(express.json()); //começa a receber json
app.post('/filmes',(req,res) => {
//const titulo = req.body.titulo;
//const genero = req.body.genero;
const {titulo, genero} = req.body;
res.send(`Filme: ${titulo} - Genero: ${genero}, recebido`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})