const Register = require('../../../model/Register')
const jwt = require('jsonwebtoken');
const jwtKey = 'e-comm'
const login = async(req, res) => {
    if(req.body.password && req.body.email) {
        let user = await Register.findOne(req.body).select("-password");
        if(user) {
            jwt.sign({user}, jwtKey, {expiresIn: "2h"}, (err, token) => {
                if(err){
                    res.send({result: "something went wrong please try after some time"})
                }
                res.send({user, auth: token})
            })
        }
        else{
            res.send({result: "no user found"})
        }
    }
}

module.exports = login;

