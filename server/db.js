// Schema、Model、Entity或者Documents的关系请牢记，Schema生成Model，Model创造Entity，Model和Entity都可对数据库操作造成影响，但Model比Entity更具操作性。
const mongoose = require('mongoose');
// 连接数据库 如果不自己创建 默认test数据库会自动生成
mongoose.connect('mongodb://localhost/qinxi',{server:{auto_reconnect:true}});

// 为这次连接绑定事件
const db = mongoose.connection;
db.once('open' ,() => {
	console.log('连接数据成功')
})

db.on('error', function(error) {
    console.error('Error in MongoDb connection: ' + error);
    mongoose.disconnect();
});

db.on('close', function() {
    console.log('数据库断开，重新连接数据库');
    mongoose.connect(config.url, {server:{auto_reconnect:true}});
});


/************** 定义模式loginSchema(包含数据表名称 logins) **************/
// https://cnodejs.org/topic/4f71363f8a04d82a3d1e4aea
// https://cnodejs.org/topic/548167933098e8df0a116fb0
const checkSchema = mongoose.Schema({
    hospitalName : String,
    checkData1 : String,
    checkData2 : String,
    checkPro1 : String,
    checkRes1 : Number,
});

const proSchema = mongoose.Schema({
    pro : String,
});


/************** 定义模型Model **************/
const Models = {
    Check : mongoose.model('Check',checkSchema),
    Pro : mongoose.model('Pro',proSchema),
}

module.exports = Models;