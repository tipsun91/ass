const React = require('react');
const Layout = require('./Layout');
const Card = require('./Card');

module.exports = function CardList({ images, title, user }) {
  return (
    <div className="album py-5 bg-light">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          { images.map( (image) => <Card key={image.id} image={image} /> ) }
        </div>
      </div>
    </div>
  )
};
