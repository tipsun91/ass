/* eslint-disable react/no-array-index-key */
const React = require('react');
const Layout = require('./Layout');

module.exports = function Auth({ errors }) {
  return (
    <Layout title="Авторизация">

      <main className="form-wrapper mb-3" role="main">

        {errors && (
          <div className="errors-wrapper container">
            <span>Your entry could not be saved:</span>
            <ul className="errors">
              {errors.map((error, index) => (
                <li className="error" key={index}>{error.message}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="reg">
          <br />
          <form method="post" action="/auth">
            <br />
            <h1 className='h1 reg_content'>Авторизация</h1>
            <div className="mb-3">
              <label htmlFor="name_input" className="reg_content reg_text form-label">Имя</label>
              <br />
              <input className="reg_content reg_input form-control" id="name_input" name="name" type="text" />
            </div>

            <div className="mb-3">
              <label htmlFor="password_input" className="reg_content reg_text form-label">Пароль</label>
              <br />
              <input className="reg_content reg_input form-control" id="password_input" name="password" type="password" />
            </div>
            <br />
            <button className="reg_content btn btn-primary" type="submit" value="Авторизоваться">Авторизоваться</button>

            {/* <input type="submit" value="Авторизоваться" className="btn btn-primary" /> */}
          </form>
        </div>
      </main>

    </Layout>
  );
};
