const router = require('express').Router();

const Profile = require('../views/Profile');

const { User, Image } = require('../db/models');
router.get('/', async (req, res) => {
  if (!res.locals.user) {
    res.redirect('/');
    return;
  }

  const images = await Image.findAll({ where: { user_id: res.locals.user.id } });
  res.renderComponent(Profile, { user:res.locals.user, images });
});

router.get('/exit', async (req, res) => {
  req.session.destroy();
  res.clearCookie(process.env.SESSION_COOKIE);
  res.redirect('/');
});

module.exports = router;
