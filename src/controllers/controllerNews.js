//exporta a função index deixando disponivel para ser usada em outras partes do projeto
module.exports.index = function(application, req, res) {
    // cria uma instancia de modulo news que será usado para acessar os dados da noticia
    var newsModel = new application.src.models.news();

    // chama o metodo getlastnews do modelo news model para buscar as ultimas noticias, esse proximo metodo recebe a função de callback que será executada após a consulta ser concluida
    newsModel.getlastnews(function(err, result) {

        // se consulta der certo o result tera as noticias recuperadas do """banco de dados""", o metodo res.render é chamado para renderizar a view - news.index e passa as noticias obtidas no result para a veiw, onde será exibida para o usuario
        res.render("news/index", {news : result});
    })
}