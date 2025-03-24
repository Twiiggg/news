// helloo hii hi iii :33 :3 ^w^ 
// Exporta uma função que recebe o objeto 'application' como parametro
// essa função configura uma rota na aplicação
module.exports = function(application){

    // define uma rota HTTP - GET para o root ('/')
    application.get('/', function(req,res) {
        // quando a rota root '/' é acessada chama o metodo index do controller 'news'
        // aí ele passa application, 'req' (request) e 'res' (response) para o metodo 'index'
        application.src.controllers.controllerNews.index(application, req, res)
    })
}           