const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET;

/**
 *
 * @param {*} id
 * @returns
 */
const tokenSign = (id) => {
  const token = jwt.sign({ id }, JWT_SECRET, {
    expiresIn: "24h",
  });

  return token;
};

/**
 * 
 * @param {*} tokenCurrent 
 * @returns 
 */
const verifyToken = (tokenCurrent) => {
   try{
    const validate = jwt.verify(tokenCurrent, JWT_SECRET)
    return validate
   }catch(e){
    return false
   }
}

module.exports = { tokenSign, verifyToken };
