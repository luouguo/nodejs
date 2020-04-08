var express = require('express');
var router = express.Router();
const User = require('../db/user')
const md5 = require('md5');
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
// 注册
router.post('/register',function(req, res, next){
  // console.log(req.body);
  var account = req.body.account;
  var password = req.body.password;
  var avatar = req.body.avatar;
  var repassword = req.body.password2;

  if (password != repassword) {
    res.json({
      err:1,
      msg:"密码不一致!"
    })
  } else {
    User.find({account:account})
    .then((data)=>{
      console.log(data);
      if (data.length > 0 ) {
        res.json({
          err:1,
          msg:"用户名已存在"
        })
      }else{
        var newPassword = md5(password)
        new User({account,password:newPassword,avatar})
        .save()
        .then((data)=>{
          res.json({
            err:0,
            msg:"注册成功"
          })
        })
        .catch((err)=>{
          console.log(err);
        })
      }      
    })
    .catch((err)=>{
     console.log(err);      
    })    
  }
})

// 登录
router.post('/signin',function(req,res,next){
  var user = req.body;
  console.log(user);
  User.find({account:user.account})
  .then((data)=>{
    if (data.length>0) {
      var mdPassword = md5(user.password)
      if (mdPassword == data[0].password) {
        res.json({
          err:0,
          msg:"登录成功!!!",
          data
        })
      }else{
        res.json({
          err:1,
          msg:"密码错误!!!"
        })
      }
    } else {
      res.json({
        err:1,
        msg:"用户不存在!!!"
      })
    }
  })
  .catch((res)=>{
    console.log(res);
  })
})

module.exports = router;
