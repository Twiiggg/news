// importa o modulo 'express', framework web pra node.js

var express = require('express');

// importa o modulo 'consign' que é usado para auto load de scripts, facilitando o gerenciamento de rotas, models e controllers
var consign = require('consign');

// criar uma instancia do express
var app = express();

// configurar a engine de visualização como '.ejs'
app.set('view engine', 'ejs');

// agora define o dir onde estão as views (template EJS)
app.set('views', './src/views');

// configura o 'consign' para inculir automaticamente as rotas, models e controllers na aplicação
consign()
    .include('src/routes') //inclui as rotas carregando os arquivos da pasta 'src/routes'
    .then('src/models') // inclui os models carregando os arquivos da pasta 'src/models'
    .then('src/controllers') //inclui os controllers carregando os arquivos da pasta 'src/controllers'
    .into(app); // injeta essa dependencias na instancia do express(app)