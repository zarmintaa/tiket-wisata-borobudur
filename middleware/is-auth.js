const jwt = require("jsonwebtoken");

module.exports = class Middleware {
  static verifyJwtPage(req, res, next) {
    const token = req?.session?.token;
    jwt.verify(token, "supersecret", (err, admin) => {
      if (err) return res.render("login", { title: "Login" });
      req.admin = admin;
      return next();
    });
  }
};
