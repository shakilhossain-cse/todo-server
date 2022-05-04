const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    task: { 
        type: String, 
        required: [true, 'This Feild Must be Required'],
        trim:true,
     },
     completed:{
         type:String,
         default:false
     }
})

module.exports= mongoose.model('Task', TaskSchema);