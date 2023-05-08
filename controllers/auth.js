const {tokenSign, verifyToken} = require('../utils/handleJwt')
const {compare, encrypt} = require('../utils/handlePassword')

let MOCK_DB = [
    {
        id:1,
        email:'pepe@pepe.com',
        password:'$2a$08$AvUKUdUivoKwbBPpnFP1v.6mvJ0E2s.IOPTbyJ14Knf3SbrJ702gm' //TODO 12345678
    }
]

const registerUser = async (req, res) => {
  const body = req.body;
  /**
   * SELECT * FROM users WHERE email == body.email
   * db.get('users').findOne({email:body.email})
   */
  const ifExist = MOCK_DB.find((user) => user.email === body.email)


  if(ifExist){
    res.send({error:'user_ya_registrado'})
    return
  }

  const passHash = await encrypt(body.password)
  const newUser = {id:2, email:body.email, password:passHash }

  console.log(passHash)

  MOCK_DB.push(newUser)


  const jwt = tokenSign(newUser.id)
  res.send({ token:jwt });
};

const loginUser = async (req, res) => {
  const body = req.body;
  const detailUser = MOCK_DB.find((user) => user.email === body.email)

  if(!detailUser){
    res.status(404)
    res.send({error:'user_not_found'})
    return
  }

  const checkPass = await compare(body.password, detailUser.password)

  if(!checkPass){
    res.status(401)
    res.send({error:'password_invalid'})
    return
  }

  const jwt = tokenSign(detailUser.id)

  res.send({ email:detailUser.email, token:jwt });
};

module.exports = { registerUser, loginUser };
