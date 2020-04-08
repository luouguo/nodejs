/**
 * 公用的模型方法
 * Created by 程月 on 2017/10/23
 */
// moment 应该是一个函数
const moment = require('moment')
moment.locale('zh-cn')   //中文

module.exports = function(schema){
    // schema = questionSchema
    schema.methods.create_time_ago = function(friendiy){
        // this 代表 模型 创建出来的实例对象
        var createTime =  this.creat_time;
        // 这是一个moment对象
        // console.log(moment(createTime).fromNow());
        if (friendiy) {
            var d = moment(createTime).fromNow()
        }else{
            var d = moment(createTime).format('YYYY-MM-DD HH:mm')            
        }
        return d
    },
    schema.methods.update_time_ago = function(friendiy){
        // this 代表 模型 创建出来的实例对象
        var updatetTime =  this.update_time;
        // 这是一个moment对象
        // console.log(moment(createTime).fromNow());
        if (friendiy) {
            var d = moment(updatetTime).fromNow()
        }else{
            var d = moment(updatetTime).format('YYYY-MM-DD HH:mm')            
        }
        return d
    }
}