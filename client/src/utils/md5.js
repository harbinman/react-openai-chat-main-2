const crypto = require("crypto");

export const md5 = (inputString) => {
  const md5Hash = crypto.createHash("md5").update(inputString).digest("hex");

  return md5Hash;
};
