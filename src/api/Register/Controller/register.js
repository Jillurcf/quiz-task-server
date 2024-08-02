const Register = require('../../../model/Register');

const register = async (req, res) => {
    try {
        let user = new Register(req.body);
        let result = await user.save();
        result = result.toObject();
        delete result.password; // Ensure sensitive data is not sent back
        res.send(result);
    } catch (error) {
        console.error('Error saving user:', error);
        res.status(500).send({ error: 'Error saving user data' });
    }
};

module.exports = register;
