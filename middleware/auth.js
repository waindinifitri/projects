const { tokenVerifier } = require("../helpers/jwt");

const authentication = (req, res, next) => {
  console.log("Authentication Works!");

  const { access_token } = req.headers;

  if (!access_token) {
    return res.status(404).json({
      msg: "Token not found!",
    });
  } else {
    try {
      const decode = tokenVerifier(access_token);
      req.userData = decode;
      next();
    } catch (error) {
      res.status(400).json(error);
    }
  }
};

const authorization = (req, res, next) => {
  let { role, isActive, isMerchant } = req.userData;

  if (role === "Admin" && isActive && isMerchant === "Seller") {
    next();
  } else {
    res.status(400).json("Only Admin Allowed!");
  }
};

module.exports = {
  authentication,
  authorization,
};
