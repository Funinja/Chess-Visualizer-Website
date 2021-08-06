const path = require('path');
const express = require('express');
const hbs = require('hbs');

const app = express();
const port = process.env.PORT || 3000;

app.set('view engine', hbs);

app.get('', (req, res) => {
    return res.send('Main Page');
});

app.get('*', (req, res) => {
    return res.send('404');
})

app.listen(port, () => {
    console.log('Server is up on port ' + port);
});