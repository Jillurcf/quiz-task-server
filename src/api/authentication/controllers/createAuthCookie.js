const createToken = require("../../../lib/authentication/createToken");

const createAuthCookie=(req,res,next)=>{
    try{
        const user = req.body;
    const token = createToken(user)

    // res.cookie('token', token, {
    //     httpOnly: true,
    //     secure: true,
    //     sameSite: 'none'
    // })
        res.send({ success: true, token });
    }catch(err) {
        next(err)
    }


}

module.exports = createAuthCookie