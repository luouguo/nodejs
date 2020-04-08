const mongoose = require("mongoose")

mongoose.connect("mongodb://127.0.0.1/new", {
    useMongoClient: true
}, err => {
    if (err) {
        console.log("数据连接失败");
    } else {
        console.log("数据连接成功");
    }
})

mongoose.Promise = Promise;
console.log('mongoose :', mongoose);
module.exports = mongoose;