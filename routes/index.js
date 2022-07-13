const router = require('express').Router();

const Home = require('../views/Home');

const { Post } = require('../db/models');
router.get('/', async (req, res) => {
  const posts = await Post.findAll();
  res.renderComponent(Home, { posts, title: 'Wellcome' });
});

module.exports = router;
