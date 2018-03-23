let express = require('express');
let Shop  =require('../models/Shop')
let Service  =require('../models/Service')
let Item  =require('../models/Item')
let  Comment =require('../models/Comment')
let City = require('../models/Citys')
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//配置route路由
//shop数据
router.get('/shop',function(req,res){
  Shop.find({},function(err,doc){
     if(!err){
       res.send(doc)
     }
  })

})
//Service数据
router.get('/service',function(req,res){
  Service.find({},function(err,data){
    if(!err){
       res.send(data)
    }
  })

})
//获取item数据
router.get('/item',function(req,res){
  //通过id来查找点击的那个商家，介绍详情
  const id = req.query.id
 Item.find({id:id},function(err,data){
     if(!err){

       res.send(data)
     }
  })

})

//获取
router.get('/comment',function(req,res){
   const page = req.query.page  || 0;
   console.log(page);
   let options={
     sort:'-createtime',
     limit:10,
     skip:page*10
   }
  Comment.find({},null,options,function(err,data){
     if(!err){
       // console.log(data)
       res.send(data)
     }
   })

})

//获取城市
router.get('/city',function(req,res){
  City.find({},function(err,data){
    if(!err){
      res.send(data)
    }
  })
})












module.exports = router;
