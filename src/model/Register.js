const mongoose = require('mongoose');

const RegisterSchema = new mongoose.Schema({
  name: String,
  image: String,
  email: {
    type: String,
  },
  password: {
    type: String,
  },
  role: {
    type: String,
  },
  status: {
    type: String,
  },
});

const Register = mongoose.model('Register', RegisterSchema);
module.exports = Register;
