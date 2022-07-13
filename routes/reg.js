const router = require('express').Router();
const access = require('../middlewares/access');
const Reg  = require('../views/Reg');

router.get('/', access('guest'), (req, res) => {
  res.renderComponent(Reg);
});

const { User } = require('../db/models');
const bcrypt = require('bcrypt');
router.post('/', access('guest'), async (req, res) => {
  try {
    const { email, name, password }  = req.body;

    if (!password[0] || password[0] !== password[1]) {
      res.redirect('/reg');
      return;
    }

    if(await User.isExists(email)){
      res.redirect('/reg');
      return;
    }

    const hash = await bcrypt.hash(password[0], 2);
    const user = await User.create({ email, name, password:hash });
    await user.save();
    req.session.userId = user.id;
    res.locals.user = user;
    res.redirect('/profile');
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
