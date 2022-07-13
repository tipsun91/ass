/* eslint-disable react/no-array-index-key */
const React = require('react');
const Layout = require('./Layout');

module.exports = function Reg({ errors }) {
  return (
    <Layout title="Регистрация">
      <main className="form-signin w-100 m-auto">
        <form action="/reg" method="POST">
          <h1 className="h3 mb-3 fw-normal">Регистрация</h1>

          <div className="form-floating">
            <input name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email</label>
          </div>
          <br />
          <div className="form-floating">
            <input name="name" type="text" className="form-control" id="floatingInput" placeholder="Имя" />
            <label htmlFor="floatingInput">Имя</label>
          </div>
          <br />
          <div className="form-floating">
            <input name="password[0]" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <br />
          <div className="form-floating">
            <input name="password[1]" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">Зарегистрироваться</button>
        </form>
      </main>
    </Layout>
  );
};
