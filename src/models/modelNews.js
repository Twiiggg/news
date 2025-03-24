// const sequelize = new Sequelize('sqlite: :memory:');
// const { Sequelize, DataTypes } = require('sequelize');
const fs = require('fs');
const json = path.join(__dirname, '/data/noticias.json');

function loadNews(callback) {
    fs.readFile(json, "utf-8", (err, data) => {
        if (err) {return callback(err, null)}
        const noticias = JSON.parse(data)
        if (noticias.noticias) {callback(null, noticias)}
        else {callback(new Error("dados não existem"))}
    })
}
module.exports = {loadNews}

// const news = sequelize.define('news', {
//     title: {
//         type: DataTypes.STRING,
//         allowNull:false
//     },
//     content: {
//         type: DataTypes.STRING,
//         allowNull:false
//     }
// });

// (async () => {
//     await sequelize.sync();

//     const newNews = news.create({
//         title: data.titulo,
//         content: data.noticia
//     })
// });

// ---------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const { Sequelize, DataTypes } = require('sequelize');
// const fs = require('fs');
// const app = express();

// // Setup Sequelize (using SQLite in-memory database for simplicity)
// const sequelize = new Sequelize('sqlite::memory:');

// // Define the News model
// const newNews = sequelize.define('News', {
//     title: {
//         type: DataTypes.STRING,
//         allowNull: false
//     },
//     content: {
//         type: DataTypes.STRING,
//         allowNull: false
//     }
// });

// // Read and parse the JSON file (data/noticias.json) using fs
// async function loadData() {
//     const jsonData = JSON.parse(fs.readFileSync('data/noticias.json', 'utf-8'));
    
//     // Sync Sequelize and create records
//     await sequelize.sync();
    
//     // Insert news data into the database
//     for (const item of jsonData) {
//         await News.create({
//             title: item.titulo,
//             content: item.noticia
//         });
//     }
// }

// // Start the Express server and render the news page
// app.set('view engine', 'ejs');

// // Route to render the news page
// app.get('/news', async (req, res) => {
//     try {
//         // Load data from the JSON file and insert into the DB
//         await loadData();

//         // Fetch the news data from the database
//         const newNews = await News.findAll();
        
//         // Pass the data to the EJS template
//         res.render('news/index', { newNews: newNews });
//     } catch (error) {
//         console.error('Error loading data:', error);
//         res.status(500).send('Server error occurred');
//     }
// });

// // Start the Express server
// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });

