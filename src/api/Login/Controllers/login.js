const Register = require('../../../model/Register');
const jwt = require('jsonwebtoken');
const jwtKey = 'e-comm';

const login = async(req, res) => {
    try {
        const { email, password } = req.body;

        console.log('Request Body:', req.body); // Log the request body to see the input

        if(email && password) {
            // Attempting to find the user by email and password
            let user = await Register.findOne({ email, password }).select("-password");

            console.log('User Found:', user); // Log the result of the query

            if(user) {
                // User found, signing JWT token
                jwt.sign({ user }, jwtKey, { expiresIn: "2h" }, (err, token) => {
                    if(err) {
                        console.log("JWT Error:", err);
                        return res.status(500).send({ result: "Internal Server Error" });
                    }
                    res.send({ user, auth: token });
                });
            } else {
                // No user found, log this situation
                console.log("No user found with the provided credentials.");
                res.status(404).send({ result: "No user found" });
            }
        } else {
            res.status(400).send({ result: "Email and password are required" });
        }
    } catch (error) {
        console.log("Error:", error);
        res.status(500).send({ result: "Internal Server Error" });
    }
};

module.exports = login;
