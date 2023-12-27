const mongoose = require('mongoose');
const plm = require("passport-local-mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/instaclone")

const userScheme = mongoose.Schema({
  username:String,
  name:String,
  email:String,
  passport:String,
  profileImage:String,
  bio: String,
  posts:[{ type: mongoose.Schema.Types.ObjectId,ref:"post"}]
})

userScheme.plugin(plm);

module.exports = mongoose.model('user', userScheme)
