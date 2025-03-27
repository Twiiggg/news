// importa as noticias 
let data = require("../../data/noticias.json");

// 'formata' e exporta as noticias
function getNews(callback) {
    callback(null, data.noticias)
}
module.exports = { getNews }