const express = require('express');
const app = express();

const hbs = require('hbs');

app.use(express.static(__dirname + "/public"));

// Express HBS engine
hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


app.get('/', (req, res) => {

    res.render('home', {
        nombre: 'Alberto',
        anio: new Date().getFullYear()
    });

    /*
    //res.send('Hola Mundo')
    let salida = {
        nombre: 'Alberto',
        cel: 'Xperia X',
        url: req.url
    };
    //res.write('Hola Mundo');
    res.send(salida) //Equivale a: res.write(JSON.stringify(salida));
        // Y a: res.end();
    */
});
app.get('/about', (req, res) => {
    res.render('about', {
        anio: new Date().getFullYear()
    });
});
app.get('/data', (req, res) => {
    res.send('Hola data');
});

app.listen(3000, () => {
    console.log('Escuchando peticiones en puerto 3000');
});