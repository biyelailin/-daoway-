let mongoose = require('mongoose')
//创建数据库
//1.Schema模型对象
//1.item集合
let itemSchema =  new mongoose.Schema({
  "id":{
    type:String
  },
  "title":{
    type:String
  },
  "name":{
    type:String
  },
  "desc":{
    type:String
  },
  "price":{
    type:Number
  },
  "oldPrice":{
    type:Number
  },
  "orderCount":{
    type:Number
  },
  "soldCount":{
    type:Number
  },
  "commentCount":{
    type:Number
  },
  "accept":{
    type:String
  },
  "praise":{
    type:String
  },
  "imgUrl":{
    type:String
  },
  "company":{
    type:String
  },
  "profile":{
    type:String
  }
})
//2.创建集合进行映射
module.exports= mongoose.model('item',itemSchema,'item')