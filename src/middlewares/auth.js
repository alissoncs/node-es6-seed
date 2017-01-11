class Auth {

  isAuthenticated(req, res, next) {
    if (true)
      return next();

    this.message = 'não está logado';
    res.send({ success: false, message: this.message });
  }

}
