/* eslint-disable jsx-a11y/aria-role */
const React = require('react');

const Layout = require('./Layout');
module.exports = function Home({ text, user }) {
  return (
    <Layout>
      <div className="container">Wellcome, {user.name}</div>
    </Layout>
  );
};
