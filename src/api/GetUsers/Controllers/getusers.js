const users = require("../../../model/Users");
const getUsers = async(req, res) => {
    const result = await users.find()
    console.log(result)
    res.send(result)
}

module.exports = getUsers;