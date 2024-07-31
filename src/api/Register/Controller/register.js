const Register = require('../../../model/Register')
const register = async(req, res) => {
    let user = new Register(req.body);
    let result = await user.save();
    // result = result.toObject()
    delete result.password
    res.send(result)
}

module.exports = register;

