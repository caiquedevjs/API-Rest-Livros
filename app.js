const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const livros = [];

app.get('/livros', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); 
});
app.get('/consulta', (req, res) =>{
  res.send( { livros: livros }); 
});

app.post('/livros',  (req, res) => {
    const livro = req.body.livro_name;
    const deletar=req.body.deletar_name;
    if (deletar){
        livros.splice(livros.indexOf(livro),1)
        res.send('livro removido com sucesso!')
    }else{
        livros.push(livro);
    res.redirect('/livros');
    }
    
});


app.listen(3000, () => {
    console.log("Servidor ligado!");
});