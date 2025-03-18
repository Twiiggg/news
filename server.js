const express = require('express');
const { json } = require('sequelize');
const path = require('path');
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express(json));

app.get('/noticias', (req,res) => {
    res.render(__dirname + '/src/views/news/index.ejs', { newNews: newNews });
    // ReferenceError: newNews is not defined
    // at C:\Users\olavo_23909\Downloads\news\server.js:11:17
    // at Layer.handle [as handle_request] (C:\Users\olavo_23909\Downloads\news\node_modules\express\lib\router\layer.js:95:5)
    // at next (C:\Users\olavo_23909\Downloads\news\node_modules\express\lib\router\route.js:149:13)
    // at Route.dispatch (C:\Users\olavo_23909\Downloads\news\node_modules\express\lib\router\route.js:119:3)
    // at Layer.handle [as handle_request] (C:\Users\olavo_23909\Downloads\news\node_modules\express\lib\router\layer.js:95:5)
    // at C:\Users\olavo_23909\Downloads\news\node_modules\express\lib\router\index.js:284:15
    // at Function.process_params (C:\Users\olavo_23909\Downloads\news\node_modules\express\lib\router\index.js:346:12)
    // at next (C:\Users\olavo_23909\Downloads\news\node_modules\express\lib\router\index.js:280:10)
    // at C:\Users\olavo_23909\Downloads\news\node_modules\express\lib\application.js:240:9
    // at Function.handle (C:\Users\olavo_23909\Downloads\news\node_modules\express\lib\application.js:177:5)
});


app.get('/', (req,res) => {
    res.send('Servidor rodando')
});

app.listen(port, () =>{
    console.log(`Server running on http://localhost:${port}`)
});

//     console.log(); // Check if the data is being passed correctly