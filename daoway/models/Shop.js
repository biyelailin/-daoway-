let mongoose = require('mongoose')
//创建数据库
//1.Schema模型对象
// 1.创建shop集合
let ShopSchema = new mongoose.Schema({
  "serviceIndex":{
    type:String
  },
  "imgUrl":{
    type:String
  },
  "serviceName":{
    type:String
  },
  "description":{
    type:String
  },
  "price":{
    type:Number
  },

})
//2.创建集合
module.exports = mongoose.model('shop',ShopSchema,'shop')
