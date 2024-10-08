const JWT_SECRET = require("./config")

const jwt = require("jsonwebtoken")

const authMiddleware = (req,res,next) =>{
    const authHeader = re.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer')){
        return res.status(403).json({})
    } 

    const token = authHeader.split(' ')[1]

    try {
        const decode = jwt.verify(token,JWT_SECRET)

        if(decode.userId){
            req.userId = decode.userId
            next()
        } 
        else {
            return res.status(403).json({})
        }
        
    } catch (error) {
        return res.status(403).json({})
    }
}

module.exports ={
    authMiddleware
}