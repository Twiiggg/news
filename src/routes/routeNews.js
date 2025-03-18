// helloo hii hi iii :33 :3 ^w^ 
// n precisa de controller?
// Nene: ainda não entendi o que faezr aqui.. nem sei o pq dos erros....
// Exporta uma função que recebe o objeto 'application' como parametro
// essa função configura uma rota na aplicação
module.exports = function(application){

    // define uma rota HTTP - GET para o root ('/')
    application.get('/', function(req,res) {
        // quando a rota root '/' é acessada chama o metodo index do controller 'news'
        // aí ele passa application, 'req' (request) e 'res' (response) para o metodo 'index'
        application.src.controllers.news.index(application, req, res)
    })
    // application.get('/noticias', (req, res) =>{
    //     res.sendFile(path.join(__dirname, '/src/views/news/index.ejs'));
    // })
}           