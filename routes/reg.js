const router = require('express').Router();

const Reg  = require('../views/Reg');

router.get('/', async (req, res) => {
  if (res.locals.user) {
    res.redirect('/profile');
    return;
  }

  res.renderComponent(Reg);
});

const { User } = require('../db/models');
const bcrypt = require('bcrypt');
router.post('/', async (req, res) => {
  try {
    if (res.locals.user) {
      res.redirect('/profile');
      return;
    }

    const { name, role, password }  = req.body;

    if(await User.isExists(name)){
      res.redirect('/reg');
      return;
    }

    const hash = await bcrypt.hash(password, 2);
    const user = await User.create({ name, role, password:hash });
    await user.save();
    req.session.user = user;
    res.redirect('/profile');
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
