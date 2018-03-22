let mongoose = require('mongoose')
//创建数据库
//1.Schema模型对象
let commentSchema = new mongoose.Schema({
  "iconUrl":{
    type:String
  },
  "aera":{
    type:String
  },
  "comment":{
    type:String
  },
  "createtime":{
    type:Number
  },
  "nick":{
    type:String
  },
  "star":{
    type:Number
  },
  "city":{
    type:String
  }
})

module.exports= mongoose.model('comment',commentSchema,'comment')
