const React = require('react');

module.exports = function Header({ user }) {
  return (
    <header>
      <div className="container">
        { (user) ? (<div><a href="#">{user.name}</a> <a href="/auth/exit">Выйти</a></div>) : (<div><a href="/auth">Авторизация</a> <a href="/reg">Регистрация</a></div>) }
      </div>
    </header>
  );
};
