const {model, Schema} = require("mongoose");

const UsersShema = new Schema({
    "name": "string",
    "image": "string",
    "email": {
        type:String
    },
    "password": {
        type:String
    },
    "role": {
        type:String 
    },
    "status": {
        type:String
    },
   
})

const Users= model("Users", UsersShema)

module.exports = Users