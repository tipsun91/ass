/* eslint-disable jsx-a11y/aria-role */
const React = require('react');

const Layout = require('./Layout');
const CardList = require('./CardList');

module.exports = function Profile({ user, posts }) {
  return (
    <Layout user={user}>
      <CardList posts={posts} />
    </Layout>
  );
};
