/* eslint-disable react/no-array-index-key */
const React = require('react');
const Layout = require('./Layout');

module.exports = function Reg({ errors }) {
  return (
    <Layout title="Регистрация">
      {/* <h1>Регистрация</h1> */}

      <main className="form-wrapper md-3" role="main">
        <div className="reg">
          {/* <h1 className='font-monospace'>Регистрация</h1> */}
          <form className='reg_form' method="post" action="/reg">
            <h1 className='h1 reg_content'>Регистрация</h1>
            <br />
            <label className='reg_content reg_text' htmlFor="name_input">Имя:</label>
            <br />
            <input className='reg_content reg_input' id="name_input" name="name" type="text" value="" />

            <div className="form-check">
              <label className="reg_content reg_text" for="flexRadioDefault1">Бабушка: </label>
              <input className="reg_content reg_input_radio" type="radio" name="role" value="gm" id="flexRadioDefault1" checked />
            </div>

            <div className="form-check">
              <label className="reg_content reg_text" for="flexRadioDefault2">Внук: </label>
              <input className="reg_content reg_input_radio" type="radio" name="role" value="gs" id="flexRadioDefault2" />
            </div>

            <label className="reg_content reg_text" htmlFor="password_input">Пароль:</label>
            <br />
            <input className="reg_content reg_input" id="password_input" name="password" type="password" value="" />
            <br />
            <button className="reg_content btn" type="submit" value="Зарегистрироваться">Зарегистрироваться</button>
            {/* <input className="reg_content btn btn-primary" type="submit" value="Зарегистрироваться" /> */}
          </form>
        </div>
      </main>

    </Layout>
  );
};
