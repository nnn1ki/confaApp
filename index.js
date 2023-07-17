const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const test = require('./routes/test');

// Порт приложения
const PORT = process.env.PORT || 3000;
const URL = 'mongodb+srv://Customer:1v2v3v@clusterconfa.645ff2y.mongodb.net/?retryWrites=true&w=majority';
const app = express();

// Настраиваем пакет express-handlebars
const hbs = exphbs.create({
  defaultLayout: 'main',
  extname: 'hbs'
});

// Регистрация движка шаблонов с express
app.engine('hbs', hbs.engine);
app.set('view engine', 'hbs'); 
app.set('views', 'views');


app.use(test);
app.use(express.static('./public'));


// const mime = require('mime');

// app.use((req, res, next) => {
//   const mimeType = mime.getType(req.url);
//   res.set('Content-Type', mimeType);
//   next();
// });

async function start() {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    app.listen(3000, () => {
      console.log('Server has been started...');
    });

  } catch (e) {
    console.log(e);
  }
};

start();
