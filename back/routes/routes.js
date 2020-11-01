let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router();
let mongoosed = require('../database/mongoose');
let admin = require('../database/model/admin')
var jwt = require("jsonwebtoken");
var passport = require('passport');
require('../database/passport')(passport);


router.post('/register', (req, res) => {
  let data = new admin(req.body);
  if (data.password === req.body.cpassword) {
    admin.insertUser(data, (err, user) => {
      if (err) {
        res.json({
          err: "user not registered",
          errr: err
        });
      } else {
        res.json({
          success: "Your Account Registred Successfully",
        });
      }
    })
  } else {
    res.json({
      error: "password Must be same"
    })
  }
})
router.post('/insert',(req,res)=>{
  let data=new admin(req.body);
  console.log(data);
  admin.insertData(data,(err,user)=>{
    if(err){
      res.json(
        {
          err:err
        }
      )
    }
    else
    if (user){
      res.json({
        data:user
      })
    }
  })
})

router.post('/verify', (req, res) => {
  admin.getUserbyEmail(req.body.email, (err, user) => {
    if (err) throw err;
    if (!user) {
      res.json({
        msg: "User'nt Found"
      })
    } else {
      admin.comparePassword(req.body.password, user.password, (err, isMatch) => {
        if (err) throw err;
        if (isMatch) {
          const token = jwt.sign({
              user
            },
            mongoosed.secret, {
              expiresIn: 604800
            })
          res.json({
            success: 'Welcome User',
            token: token,
            user: {
              id: user._id,
              username: user.username,
              email: user.email,
              mobile: user.mobile
            }
          })
        } else {
          res.json({
            success: false,
            msg: "chalbe double dal"
          })
        }
      })
    }
  })
})
router.post('/unique',
    (req, res) => {
    admin.getUserbyEmail(req.body.email, (err, user) => {
        if (err) throw err;
        if (user) {
          res.json({
            available: user.email
          })
        }
      })
    })

    router.get('/getUser', (req, res) => {
      admin.getUser().then((data) => {
        res.json(data)
      }).catch(err => console.log(err))
    })

    router.get('/profile', passport.authenticate('jwt', {
      session: false
    }), (req, res) => {
      res.send(req.user);
    })

    module.exports = router;
