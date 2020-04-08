

var express = require('express');
var router = express.Router();
const Question = require('../db/question')

/* 问题列表 */
router.post('/', function(req, res, next) {
  Question.find()
  .sort({update_time:-1})
  .then((data)=>{
    res.json({
      err:0,
      data
    })
  })
  .catch((err)=>{
    console.log(err);
  })
});

// 发布问题
router.post('/create',function(req,res,next){
  // console.log(req.body);
  var info = req.body;
  new Question({title:info.title,category:info.category,content:info.content,author:info.author})
  .save()
  .then((data)=>{
    res.json({
      err:0,
      msg:"提交成功!!"
    })
  })
  .catch((err)=>{
    console.log(err);
  })
})

// 问题详情
router.post('/detail',function(req,res,next){
  var id = req.body.id;
  Question.find({_id:id})
  .populate('author')
  .then((data)=>{
    // console.log(data);
    res.json({
      err:0,
      data
    })
  })
  .catch((err)=>{
    console.log(err);
  })
})

// 删除
router.get('/delete',function(req,res,next){
  var id = req.query.id;
  console.log(id);
  Question.findByIdAndRemove(id)
  .then((data)=>{
    res.json({
      err:0,
      msg:"删除成功!"
    })
  })
  .catch((err)=>{
    console.log(err);
  })
})

// 获取编辑数据
router.post('/getInfo',function(req,res,next){
  var id = req.body.id;
  Question.findById(id)
  .then((data)=>{
    res.json({
      err:0,
      data
    })
  })
  .catch((res)=>{
    console.log(err);
  })
})

// 修改
router.post('/edit',function(req,res,next){
  // console.log(req.body);
  var id = req.body.id;
  var data = req.body
  Question.findByIdAndUpdate(id,data,{new:true})
  .then((data)=>{
    if (data) {
        res.json({
            err:0,
            msg:'更新数据成功',
            data
        })
    }else{
        res.json({
            err:1,
            msg:'更新数据失败'
        })
    }
})
})
module.exports = router;
