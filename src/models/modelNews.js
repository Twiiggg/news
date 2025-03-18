const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite: :memory:');
const json = await fetch('/data/noticias.json');
const data = json.json();

console.log(data);

const news = sequelize.define('News', {
    title: {
        type: DataTypes.STRING,
        allowNull:false
    },
    content: {
        type: DataTypes.STRING,
        allowNull:false
    }
});

(async () => {
    await sequelize.sync();

    const newTitle = news.create({
        title: data.titulo,
        content: data.noticia
    })
});

// ---------------------------------------------------------------------------------------------------------------------------------

// const express = require('express');
// const { Sequelize, DataTypes } = require('sequelize');
// const fs = require('fs');
// const app = express();

// // Setup Sequelize (using SQLite in-memory database for simplicity)
// const sequelize = new Sequelize('sqlite::memory:');

// // Define the News model
// const newTitle = sequelize.define('News', {
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
//         const newTitle = await News.findAll();
        
//         // Pass the data to the EJS template
//         res.render('news/index', { newTitle: newTitle });
//     } catch (error) {
//         console.error('Error loading data:', error);
//         res.status(500).send('Server error occurred');
//     }
// });

// // Start the Express server
// app.listen(3000, () => {
//     console.log('Server is running on http://localhost:3000');
// });

