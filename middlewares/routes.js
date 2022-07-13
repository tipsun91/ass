// Импорт маршрутов.
module.exports = (app) => {
  app.use('/',              require('../routes/index'));          // Основные странички
  app.use('/reg',           require('../routes/reg'));            // Регистрация
  app.use('/auth',          require('../routes/auth'));           // Авторизация
  app.use('/profile',       require('../routes/profile'));        // Профиль
};
