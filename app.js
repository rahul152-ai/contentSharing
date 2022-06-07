require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true});
const userSchema={
    email:String,
    password:String,
    post:[
       {
        Img:Buffer,
        contentType:String
       }
    ]
}
 new mongoose.model('Image',userSchema);

app.get('/',(req,res)=>{
    res.render('home');
   
})



app.get('/login',(req,res)=>{
    res.render('login');


});
app.post('/login',(req,res)=>{
   
    
})

app.get('/signup',(req,res)=>{
    res.render('signup');
});
app.post('/register',(req,res)=>{
    const userName=req.body.username;
    const Password = req.body.password;
    console.log(userName,Password);
    res.send('data recive sucessfully');
})
app.get('/post',(req,res)=>{
    res.render('post');
});
app.get('/searchPost',(req,res)=>{
    res.render('searchPost');
})
app.get('/showPost',(req,res)=>{
    res.render('showPost',{heading:"rahul"});
})



app.post('/post',(req,res)=>{
    console.log('post accepted');
    console.log(req.body.heading);
    console.log(req.body.image);
   
})


app.listen(3000,()=>{
    console.log("server is running on port 3000");
})