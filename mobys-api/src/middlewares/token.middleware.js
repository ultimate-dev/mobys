const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  let token = req.headers["authorization"];
  if (token) {
    jwt.verify(token.split(" ")[1], process.env.SECRET_KEY, (err, decoded) => {
      if (!err) {
        req.decoded = decoded;
        req.companyId = decoded.companyId;
      }
    });
  } else {
  }
  next();
};
