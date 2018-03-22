
let mongoose= require('mongoose')
//创建数据库
//1.Schema模型对象

let ServiceSchema = new mongoose.Schema({

  "id":{
    type:String
  },
  "title":{
    type:String
  },
  "orderCount":{
    type:Number
  },
  "positiveRate":{
    type:String
  },
  "imgUrl":{
    type:String
  }
})

//2.创建集合
module.exports= mongoose.model('service',ServiceSchema,'service')