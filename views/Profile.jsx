/* eslint-disable jsx-a11y/aria-role */
const React = require('react');

const Layout = require('./Layout');
const CardList = require('./CardList');

module.exports = function Profile({ user, images }) {
  return (
    <Layout>
      <div className="container">
        <a href="/load">Загрузить</a>
        <a href="/profile/exit">Выйти</a>
      </div>
      <CardList images={images} user={user} title={'title'} />
    </Layout>
  );
};
