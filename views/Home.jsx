/* eslint-disable jsx-a11y/aria-role */
const React = require('react');
const CardList = require('./CardList');

const Layout = require('./Layout');
module.exports = function Home({ user, posts }) {
  return (
    <Layout user={user}>
      <CardList posts={posts} />
    </Layout>
  );
};
