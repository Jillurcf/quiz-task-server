const { model, Schema } = require("mongoose");

const RegisterSchema = new Schema({
  name: "string",
  image: "string",
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

const Register = model("Register", RegisterSchema);
module.exports = Register;
