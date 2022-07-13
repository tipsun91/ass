const cookieParser = require('cookie-parser');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
// Cookie & Session
module.exports = (app) => {
  app.use(cookieParser());
  app.use(session({
    store: new FileStore(),
    name: process.env.SESSION_COOKIE, // Имя куки для хранения id сессии. По умолчанию - connect.sid
    secret: process.env.SESSION_SECRET,	// Секретное слово для шифрования, может быть любым
    resave: true, // Пересохранять ли куку при каждом запросе
    saveUninitialized: false, // Создавать ли сессию без инициализации ключей в req.session
    cookie: {
      maxAge: 1000 * 60 * 60 * 1, // Срок истечения годности куки в миллисекундах
      httpOnly: true, // Серверная установка и удаление куки, по умолчанию true
      // secure: true, // Only use cookies over https.
    },
  }));
  // промежуточная функция для очистки куки при истёкшей сессии на сервере
  app.use((req, res, next) => {
    if (req.cookies[process.env.SESSION_COOKIE] && !req.session.user) {
      res.clearCookie(process.env.SESSION_COOKIE);
      res.redirect('/');
    } else {
      next();
    }
  });
  // промежуточная функция наполнения локальных переменных
  app.use((req, res, next) => {
    if (req.session.user) {
      res.locals.user = req.session.user;
    }

    next();
  });
}
