const bcrpyt = require("bcrpyt");
const saltRound = Number(process.env.SALT_ROUND);

const encyrptPwd = (password) => bcrpyt.hashSync(password, saltRound);
const decryptPwd = (password, userPwd) => bcrpyt.compareSync(password, userPwd);

module.exports = {
  encyrptPwd,
  decryptPwd,
};
