var mongoose = require("./db.js");
const Schema = mongoose.Schema;
const shortid = require("shortid")
// 创建Schema
var userSchema = Schema({
    _id: {
        type: String,
        // 使用短id
        default: shortid.generate
    },
    account:String,
    password:String
    // 用户头像
    // avatar:String
})
// 创建模型
var User = mongoose.model("user",userSchema)
module.exports = User;