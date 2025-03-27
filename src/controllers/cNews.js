// importa o model
const mNews = require('../models/mNews')

// define a exportação
module.exports = { 
    //define a função
    news: (req, res) => {
        //obtem as noticias
        mNews.getNews(function(err,result){
            
            //se houver erro, retorna que houve um erro
            if (err) {
                return res.status(500).send("Erro ao carregar as notícias.");
            }
        
            // se não houver erro, renderiza a view com as noticias
            res.render('index', { news : result });
        });
    }

}   