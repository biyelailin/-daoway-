//数据库连接 
let mongoose = require('mongoose')
//连接数据库
mongoose.connect('mongodb://localhost:27017/daoway')

mongoose.connection.once('open',function(err){
  if(!err){
    console.log('数据库连接成功')
  }
})

