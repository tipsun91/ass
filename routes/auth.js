const router = require('express').Router();
const access = require('../middlewares/access');
const Auth  = require('../views/Auth');
router.get('/', access('guest'), (req, res) => {
  res.renderComponent(Auth);
});

const { User } = require('../db/models');
const bcrypt = require('bcrypt');
router.post('/', access('guest'), async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.isExists(email);

    if(!user) {
      res.redirect('/reg');
      return;
    }

    if(! await bcrypt.compare(password, user.password)){
      res.redirect('/auth');
      return;
    }

    req.session.userId = user.id;
    res.locals.user = user;

    res.redirect('/profile');
    return;
  } catch(error){
    res.status(500).json(error);
  }
});

router.get('/exit', access('user'), async (req, res) => {
  req.session.destroy();
  res.clearCookie(process.env.SESSION_COOKIE);
  res.redirect('/');
});

module.exports = router;
