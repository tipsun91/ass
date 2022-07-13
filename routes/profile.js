const router = require('express').Router();
const access = require('../middlewares/access');
const Profile = require('../views/Profile');

const { Post } = require('../db/models');
router.get('/', access('user'), async (req, res) => {
  try {
    const posts = await Post.findAll({
      where: {
        user_id: res.locals.user.id
      }
    });
    res.renderComponent(Profile, {posts});
    return;
  } catch (error) {
    res.status(500).json(error.message);
  }
});

module.exports = router;
