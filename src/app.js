const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

const viewsPath = path.join(__dirname, '../views');
const publicDirectoryPath = path.join(__dirname, '../public/')

app.set('view engine', 'hbs');
app.set('views', viewsPath);

app.use(express.static(publicDirectoryPath));

app.get('', (req, res) => {
    // return res.send('Main Page');
    res.render('index', {
        title: 'Chess Visualization',
        name: 'Dennis Lam'
    });
});

app.get('*', (req, res) => {
    return res.send('404');
})

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});