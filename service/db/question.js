var mongoose = require("./db.js");

const Schema = mongoose.Schema;

const shortid = require("shortid")
const baseModel = require('./baseModel.js')

// 创建Schema
var questionSchema = Schema({
    _id: {
        type: String,
        // 使用短id
        default: shortid.generate
    },
   // 标题
   title:{
    type:String
    },
    // 内容
    content:{
        type:String
    },
    // 分类
    category:{
        type:String
    },
    // 封面
    // picture:{
    //     type:String
    // },
    // 作者
    author:{
        type:String,
        ref:"user"
    },
    // 创建时间
    create_time:{
        type:Date,
        default:Date.now
    },
    // 更新时间
    update_time:{
        type:Date,
        default:Date.now
    },
})
// 使用公用处理函数
questionSchema.plugin(baseModel)
// 创建模型
var Question = mongoose.model("question",questionSchema)

module.exports = Question;