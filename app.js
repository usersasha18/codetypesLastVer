const express = require('express');
const exphbs = require('express-handlebars');
const session = require('express-session');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();

// Настройка CORS
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());

app.use(session({
  secret: '123123',
  resave: false,
  saveUninitialized: true
}));

app.use(express.static('public'));

app.engine('hbs', exphbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/', 
    partialsDir: __dirname + '/views/partials/',
}));

app.set('view engine', 'hbs');

app.get('/', (req, res) => {
  res.render('home', {
      title: 'Начало',
      year: new Date().getFullYear()
  });
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'О нас',
        year: new Date().getFullYear()
    });
});

app.get('/contact', (req, res) => {
    res.render('contact', {
        title: 'Контакты',
        year: new Date().getFullYear()
    });
});

// Настройка MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'new_users'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to database');
})

// Маршрут для регистрации
app.post('/register', (req, res) => {
    const { username, email, password } = req.body;
    // Хеширование пароля

    bcrypt.hash(password, 10, (err, hash) => {
      if (err) {
        return res.status(500).send('Error registering new user');
      }
  
      // Сохранение пользователя в базе данных
      db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [username, email, hash], (error, results) => {
        if (error) {
          console.error('Ошибка при выполнении запроса к базе данных:', error);
          return res.status(500).send('Все нахуй сломалось');
        }
        res.status(200).send('Ебать оно работает');
      });
    });
  });

// Запуск сервера
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Сервер запущен на порту ${PORT}`);
});