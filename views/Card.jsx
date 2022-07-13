const React = require('react');

module.exports = function Card({ post }) {
  return (
    <p>{post.text}</p>
  );
};
