const jwt = require("jsonwebtoken");
const secretKey = "TES";

const tokenGenerator = (user) => {
  console.log(user, "--user");
  const { id, username, role, isActive, isMerchant } = user;

  return jwt.sign(
    {
      id,
      username,
      role,
      isActive,
      isMerchant,
      isAdmin,
      isSuperAdmin,
    },
    secretKey
  );
};

const tokenVerifier = (access_token) => {
  return jwt.verify(access_token, secretKey);
};

module.exports = {
  tokenGenerator,
  tokenVerifier,
};
