const mongoose=require('mongoose')
const gameTrain=mongoose.Schema(
    {
        u_name:String,
        activity:String,
        s_time:String,
        e_time:String
    }
)
let User=mongoose.model('student',gameTrain)
module.exports=User