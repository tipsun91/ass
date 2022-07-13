/* eslint-disable react/no-array-index-key */
const React = require('react');
const Layout = require('./Layout');

module.exports = function Auth({ errors }) {
  return (
    <Layout title="Авторизация">
      <main className="form-signin w-100 m-auto">
        <form action="/auth" method="POST">
          <h1 className="h3 mb-3 fw-normal">Авторизация</h1>

          <div className="form-floating">
            <input name="email" type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input name="password" type="password" className="form-control" id="floatingPassword" placeholder="Password" />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">Авторизоваться</button>
        </form>
      </main>
    </Layout>
  );
};
