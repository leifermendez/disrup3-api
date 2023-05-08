let MOCK_DB = [
    {
        id:1,
        email:'pepe@pepe.com',
        password:'$2a$08$AvUKUdUivoKwbBPpnFP1v.6mvJ0E2s.IOPTbyJ14Knf3SbrJ702gm' //TODO 12345678
    }
]

const {verifyToken} = require('../utils/handleJwt')
const sessionMid = (req, res, next) => {

    const headerToken = req.headers?.authorization;


    if(!headerToken){
        res.status(401)
        res.send('inicia_session')
        return
    }
  
    //Bearer toktotkto
    const token = headerToken.split(' ').pop()
    const isValid = verifyToken(token)
    if(!isValid){
        res.status(401)
        res.send('token_invalid')
        return 
    }

    const findUser = MOCK_DB.find((usr) => usr.id === isValid.id)

    console.log(findUser)

    next()



    //CLiente (jwt)
    //Res. se encargara de enviar un mensaje si NO tiene token 
    //next ==> continua al controaldor
}

module.exports = {sessionMid}