module.exports = (access, redirectUrl = '/') => {
  return (req, res, next) => {
    switch (access) {
      case 'user':
        if (res.locals.user) {
          next();
        } else {
          res.redirect(redirectUrl);
        }
        return;
      case 'guest':
        if (!res.locals.user) {
          next();
        } else {
          res.redirect(redirectUrl);
        }
        return;
      default:
        res.redirect(redirectUrl);
        return;
    }
  };
};
