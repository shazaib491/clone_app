const mongoose = require('mongoose')
const config = require('../mongoose')
const bcrypt = require('bcryptjs');
const UserScehma = mongoose.Schema({
  uname: {
    type: String
  },
  email: {
    type: String
  },
  password: {
    type: String
  },
  mobile: {
    type: String
  }
})

const admin = module.exports = mongoose.model('admin', UserScehma)

module.exports.insertUser = (data, callback) => {
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(data.password, salt).then((hash) => {
      data.password = hash
      data.save(callback);
    }).catch(err => {
      console.log(err)
    })
  })
}


module.exports.insertData=(data,callback)=>{
  data.save(callback);
}

module.exports.getUserbyEmail = (email, callback) => {
  admin.findOne({
    email: email
  }, callback)
}

module.exports.comparePassword = (candidiatePassword, hash, callback) => {
  bcrypt.compare(candidiatePassword, hash, (err, isMatch) => {
    if (err) throw err;
    callback(null, isMatch)
  })
}

module.exports.getUser = (req, res) => {
  let data = admin.find({})
  return data;
}

module.exports.getUserById = (id, callback) => {
  admin.findById(id, callback);
}
