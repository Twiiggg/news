// importa o express
const express = require('express');
// importa o router
const router = express.Router();
// importa o controller
const cNews = require("../controllers/cNews");

// define a rota
router.get('/', cNews.news)

// exporta o router
module.exports = router