const React = require('react');

const Card = require('./Card');

module.exports = function CardList({ posts }) {
  return (
    <div>
      { posts.map( (post) => <Card key={post.id} post={post} /> ) }
    </div>
  )
};
