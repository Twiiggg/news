// importa o express
const express = require('express');
const app = express();
// define a pasta src como 'raiz' para outros paths
app.use(express.static(__dirname + '/src'));
// define o motor da view, para que ele seja renderizado
app.set('view engine', 'ejs');
// defina o camihno da view
app.set('views', './src/views');
// importa a route
const routes = require('./src/routes/rNews')

// usa a route
app.use('/', routes)

// dá feedback no console do server, falando que o server tá rodando
app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:3000`);
});