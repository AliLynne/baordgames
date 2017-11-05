const mongoose = require('mongoose')
const bcrypt = require('bcrypt-nodejs')
const SALT_FACTOR = 10
let noop = function(){}

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: 'Username cannot be blank',
    unique: true
  },
  password: {
    type: String,
    require: 'password cannot be blank'
  },
  displayName: {
    type: String
  },
  bio: {
    type: String
  },
  created: {
    type: Date,
    default: Date.now
  }
})


userSchema.pre('save', function(done){
  const user = this
  if (!user.isModified('password')){
    return done
  }
  bcrypt.genSalt(SALT_FACTOR, function(err, salt){
    if (err){return done(err)}
    bcrypt.hash(user.password, salt, noop,
    function(err, hashedPassword){
      if (err){return done(err)}
      user.password = hashedPassword
      done()
    })
  })
})


userSchema.methods.name = function() {
  return this.displayName || this.username;
};

userSchema.methods.checkPassword = function(guess, done) {
  bcrypt.compare(guess, this.password, function(err, isMatch) {
    done(err, isMatch);
  });
};

const User = mongoose.model('User', userSchema)
module.exports = User

