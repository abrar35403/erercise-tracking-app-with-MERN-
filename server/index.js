const express=require('express');
const User=require('./Schema')
const app=express();
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const cors=require('cors')
const port=4000;
app.use(bodyParser.json())

// const corsOption = {

//     origin:"*",
//     Credential:true,
//     optionSuccessStatus:200,
// }
// app.use(cors(corsOption))

app.use(cors())
app.listen(port,()=>{
    console.log("express server execute ");
})

mongoose.connect('mongodb://127.0.0.1:27017/gameTrain',{
    useNewUrlParser:true

})
mongoose.connection.once('open',()=>{
    console.log("mongoose connected");
})

app.post('/add',(req,res)=>{
    let user=new User(req.body)
    user.save();
    res.json("data added")
})
app.get('/get',async(req,res)=>{
    let user=await User.find({})
    res.json(user)
})

app.get("/edit/:id", async (req, res) => {
    let users = await User.findById(req.params.id);
    try {
      res.json(users);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  app.put("/update/:id", async (req, res) => {
    await User.findByIdAndUpdate({ _id: req.params.id }, { $set: req.body });
    res.json("ho gya");
  });
app.delete('/delete/:id',async(req,res)=>{
    await User.findOneAndDelete({_id:req.params.id})
    res.json("user Successfully del")
})
//   app.get("/get/:id", async (req, response) => {
//     const result = await userSchema.findById({_id:req.params.id});
//     response.json(result);
//   });  
mongoose.set('strictQuery',false)