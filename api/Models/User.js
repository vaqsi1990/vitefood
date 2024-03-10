const mongoose = require('mongoose');
const {Schema} = mongoose;

const UserSchema = new Schema({
  name: String,
  email: {type:String, unique:true},
  password: String,
  photos: [String],
  isAdmin: {
    type: Boolean,
    default: false,
},
});

const UserModel = mongoose.model('User', UserSchema);

module.exports = UserModel;