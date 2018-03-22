let mongoose= require('mongoose')

let CitySchema = new mongoose.Schema({
name:{
  type:String
}
})
module.exports = mongoose.model('city',CitySchema,'city')
