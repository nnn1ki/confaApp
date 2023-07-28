const express = require('express');
const mongoose = require('mongoose');
const exphbs = require('express-handlebars');
const test = require('./routes/test');






// пробное подключение событий
const action = require('./action.js');
// НУЖНО ПОНЯТЬ КАК РАБОТАТЬ С СОБЫТИЯМИ И ДОБАВЛЯТЬ ЛИ ИХ В ПАПКУ "МОДЕЛЬ"





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

//и вот тут мы вроде как должны тоде подключить наши события
// app.use(action);



app.use(express.static('./public'));

async function start() {
  try {
    await mongoose.connect(URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    app.listen(PORT, () => {
      console.log('Server has been started...');
    });

  } catch (e) {
    console.log(e);
  }
};

start();
