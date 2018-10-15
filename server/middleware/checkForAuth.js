module.exports = function (req, res, next) {
  if(req.session.user.id === 0) {
      res.status(403).send('Login before continuing');
  }
  next();
}
