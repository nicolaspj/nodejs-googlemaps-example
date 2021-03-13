var express = require('express'),
    path = require('path'),
    jade = require('jade'),
    coffee = require('./routes/coffee'),
    pizza = require('./routes/pizza');

var app = new express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(express.static(path.join(__dirname, 'public')));
app.use('/coffee', coffee);
app.use('/pizza', pizza);

app.get('/',function(req,res){
  res.render('layout', { title: 'Mar del Bache', subtitle: 'Los Baches de la ciudad de Mar del Plata' });
});

app.listen(3000)
