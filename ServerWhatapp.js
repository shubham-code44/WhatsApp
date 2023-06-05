var express = require("express");
var app = express();
app.use(express.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );  
  res.header("Access-Control-Allow-Methods", "GET,POST,DELETE,PUT,OPTIONS");   
  next();
});
var port = process.env.PORT || 2410;
app.listen(port, () => console.log(`Node app listening on port ${port}!`));

let user=[{id:1,dp:"https://images.pexels.com/photos/15252557/pexels-photo-15252557/free-photo-of-man-taking-photo-on-street.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",name:"Karan Singh",status:"Last online 6 minutes ago",time:"09:02",missed:"yes"},
           {id:2,dp:"https://images.pexels.com/photos/15812678/pexels-photo-15812678/free-photo-of-man-sunglasses-people-sand.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",name:"Suraj khandewal",status:"Last online 18 minutes ago",time:"11:24",missed:"no"},
           {id:3,dp:"https://images.pexels.com/photos/16577589/pexels-photo-16577589/free-photo-of-portrait-woman.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",name:"Tripti sihiri",status:"online",time:"15:05",missed:"yes"},
           {id:4,dp:"https://images.pexels.com/photos/15031646/pexels-photo-15031646/free-photo-of-young-man-sitting-on-steps.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",name:"Aman",status:"online",time:"15:45",missed:"yes"},
           {id:5,dp:"https://images.pexels.com/photos/16153000/pexels-photo-16153000/free-photo-of-portrait-of-a-handsome-man-wearing-sunglasses.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",name:"Pradeep",status:"Last online 29 minutes ago",time:"16:12",missed:"yes"},
           {id:6,dp:"https://images.pexels.com/photos/16822762/pexels-photo-16822762/free-photo-of-dawn-landscape-sunset-people.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",name:"Sneha",status:"Last online 6 minutes ago",time:"16:26",missed:"yes"},
           
         ]
let message=[
              {id:1,uid:1,recevied:"yes",send:"no",status:"online",text:"",media:{type:"image",src:"https://images.unsplash.com/photo-1552168324-d612d77725e3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y2FtZXJhfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",alt:"camera"},time:"09:01"},
              {id:1,uid:1,recevied:"yes",send:"no",status:"online",text:"",media:{type:"image",src:"https://images.unsplash.com/photo-1581591524425-c7e0978865fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",alt:""},time:"09:01"},
              {id:1,uid:1,recevied:"yes",send:"no",status:"online",text:"",media:{type:"image",src:"https://images.unsplash.com/photo-1607462109225-6b64ae2dd3cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGNhbWVyYXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",alt:""},time:"09:01"},
              {id:1,uid:1,recevied:"yes",send:"no",status:"online",text:"Hello",media:{type:"image",src:""},time:"09:02"},
              {id:1,uid:1,recevied:"yes",send:"no",status:"online",text:"how are you?",media:{type:"image",src:""},time:"09:03"},
              {id:1,uid:1,recevied:"no",send:"yes",status:"online",text:"hi",media:{type:"image",src:""},time:"09:10"},
              {id:1,uid:1,recevied:"no",send:"yes",status:"online",text:"Fine,what about you",media:{type:"image",src:""},time:"09:10"},
              {id:1,uid:1,recevied:"yes",send:"no",status:"online",text:"Good..",media:{type:"image",src:""},time:"09:12"},
              {id:1,uid:1,recevied:"yes",send:"no",status:"online",text:"where are you?",media:{type:"image",src:""},time:"09:12"},
              {id:1,uid:1,recevied:"yes",send:"no",status:"online",text:"Delhi, doing job",media:{type:"image",src:""},time:"09:13"},
              {id:1,uid:1,recevied:"no",send:"yes",status:"online",text:"Nice",media:{type:"image",src:""},time:"09:15"},
              {id:1,uid:1,recevied:"no",send:"yes",status:"online",text:"Any other plan?",media:{type:"image",src:""},time:"09:16"},
              {id:1,uid:1,recevied:"yes",send:"no",status:"online",text:"",media:{type:"image",src:"https://media.istockphoto.com/id/1372641621/photo/portrait-of-a-businessman-on-gray-background.webp?b=1&s=170667a&w=0&k=20&c=Yyi5slaeNpq_HPcfgy1305VpJSwerPm_s7mTz_bBk6c=",alt:"I am shubham"},time:"09:20"},
              
              {id:2,uid:1,recevied:"no",send:"yes",status:"online",text:"Hey! How are ya doing?",media:{type:"image",src:""},time:"10:15"},
              {id:2,uid:1,recevied:"yes",send:"no",status:"online",text:"Good! you??",media:{type:"image",src:""},time:"10:40"},
              {id:2,uid:1,recevied:"no",send:"yes",status:"online",text:"Pretty good!",media:{type:"image",src:""},time:"11:10"},
              {id:2,uid:1,recevied:"no",send:"yes",status:"online",text:"Are we still on for the movies later",media:{type:"image",src:""},time:"11:11"},
              {id:2,uid:1,recevied:"yes",send:"no",status:"online",text:"Yes",media:{type:"image",src:""},time:"11:15"},
              {id:2,uid:1,recevied:"yes",send:"no",status:"online",text:"Do you want get sushi first??",media:{type:"image",src:""},time:"11:16"},
              {id:2,uid:1,recevied:"no",send:"yes",status:"online",text:"sure you paid last time, so i will get it tonight",media:{type:"image",src:""},time:"11:20"},
              {id:2,uid:1,recevied:"yes",send:"no",status:"online",text:"",media:{type:"image",src:"https://media.cnn.com/api/v1/images/stellar/prod/140430115517-06-comfort-foods.jpg?q=w_1080,h_720,x_100,y_0,c_crop",alt:"Your order"},time:"12:00"},
              {id:2,uid:1,recevied:"no",send:"yes",status:"online",text:"Thanks",media:{type:"image",src:""},time:"12:10"},
            

              {id:3,uid:1,recevied:"yes",send:"no",status:"online",text:"Hello! can you help me please",media:{type:"image",src:""},time:"10:15"},
              {id:3,uid:1,recevied:"yes",send:"no",status:"online",text:"Hello, I need help",media:{type:"image",src:""},time:"10:40"},
              {id:3,uid:1,recevied:"yes",send:"no",status:"online",text:"Hey can you give me a hand with something??",media:{type:"image",src:""},time:"11:10"},
              {id:3,uid:1,recevied:"yes",send:"no",status:"online",text:"",media:{type:"image",src:"https://images.unsplash.com/photo-1436397543931-01c4a5162bdb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjF8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",alt:""},time:"10:11"},
              {id:3,uid:1,recevied:"yes",send:"no",status:"online",text:"",media:{type:"image",src:"https://images.unsplash.com/photo-1483232539664-d89822fb5d3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjh8fGJhY2tncm91bmR8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=500&q=60",alt:""},time:"10:11"},
              {id:3,uid:1,recevied:"no",send:"yes",status:"online",text:"Sure what can I help with",media:{type:"image",src:""},time:"11:11"},
              {id:3,uid:1,recevied:"no",send:"yes",status:"online",text:"Hello, What can we help you with?",media:{type:"image",src:""},time:"11:15"},
              

              {id:4,uid:1,recevied:"no",send:"yes",status:"online",text:"Test message",media:{type:"image",src:""},time:"10:15"},
              {id:4,uid:1,recevied:"no",send:"yes",status:"online",text:"Hello again!",media:{type:"image",src:""},time:"10:40"},
              {id:4,uid:1,recevied:"no",send:"yes",status:"online",text:"How are you??",media:{type:"image",src:""},time:"11:10"},
              {id:4,uid:1,recevied:"no",send:"yes",status:"online",text:"I am testing out the new stack notification on iOS",media:{type:"image",src:""},time:"11:11"},
              {id:4,uid:1,recevied:"no",send:"yes",status:"online",text:"I an texting you yet again",media:{type:"image",src:""},time:"11:15"},
              {id:4,uid:1,recevied:"no",send:"yes",status:"online",text:"To see how the notification list works",media:{type:"image",src:""},time:"11:16"},
              {id:4,uid:1,recevied:"no",send:"yes",status:"online",text:"Hello",media:{type:"image",src:""},time:"11:20"},
              {id:4,uid:1,recevied:"yes",send:"no",status:"online",text:"Sorry, i forget",media:{type:"image",src:""},time:"14:15"},
              {id:4,uid:1,recevied:"yes",send:"no",status:"online",text:"I am calling you",media:{type:"image",src:""},time:"14:15"},
          
              {id:5,uid:1,recevied:"yes",send:"no",status:"online",text:"Hello",media:{type:"image",src:""},time:"11:20"},
              {id:5,uid:1,recevied:"no",send:"yes",status:"online",text:"Pretty good!",media:{type:"image",src:""},time:"11:10"},
              {id:5,uid:1,recevied:"no",send:"yes",status:"online",text:"Are we still on for the movies later",media:{type:"image",src:""},time:"11:11"},
              {id:5,uid:1,recevied:"yes",send:"no",status:"online",text:"Yes",media:{type:"image",src:""},time:"11:15"},
              {id:5,uid:1,recevied:"yes",send:"no",status:"online",text:"Sorry, i forget",media:{type:"image",src:""},time:"14:15"},
              {id:5,uid:1,recevied:"yes",send:"no",status:"online",text:"I am calling you",media:{type:"image",src:""},time:"14:15"},
              {id:5,uid:1,recevied:"yes",send:"no",status:"online",text:"Hello shubham",media:{type:"image",src:""},time:"14:15"},
              {id:5,uid:1,recevied:"no",send:"yes",status:"online",text:"Hi, Shneha,how are you?",media:{type:"image",src:""},time:"14:40"},
              {id:5,uid:1,recevied:"no",send:"yes",status:"online",text:"Was planning to meet you today, are you available today evening",media:{type:"image",src:""},time:"14:50"},

              {id:6,uid:1,recevied:"no",send:"yes",status:"online",text:"Hi I saw on Facebook you have tickets to England Colombia",media:{type:"image",src:""},time:"10:15"},
              {id:6,uid:1,recevied:"no",send:"yes",status:"online",text:"How much and what cat??",media:{type:"image",src:""},time:"10:40"},
              {id:6,uid:1,recevied:"yes",send:"no",status:"online",text:"Cat 2700 usd",media:{type:"image",src:""},time:"11:10"},
              {id:6,uid:1,recevied:"yes",send:"no",status:"online",text:"Cat 900 usd",media:{type:"image",src:""},time:"11:11"},
              {id:6,uid:1,recevied:"yes",send:"no",status:"online",text:"I have like 40 tickets",media:{type:"image",src:""},time:"11:15"},
              {id:6,uid:1,recevied:"no",send:"yes",status:"online",text:"ok",media:{type:"image",src:""},time:"11:16"},
              {id:6,uid:1,recevied:"no",send:"yes",status:"online",text:"Quite pricey",media:{type:"image",src:""},time:"11:20"},
              {id:6,uid:1,recevied:"no",send:"yes",status:"online",text:"I will think about it",media:{type:"image",src:""},time:"14:15"},
              {id:6,uid:1,recevied:"yes",send:"no",status:"online",text:"Ok",media:{type:"image",src:""},time:"14:20"},
            ]

let loginuser=[{email:"shubham@gmail.com",password:"shubham"}]
app.get("/AllUser",function(req,res){
    res.send({"user":user,"message":message})
})

app.post("/login",function(req,res){
  let {email,password}=req.body
  let login2=loginuser.find((pr)=> pr.email==email && pr.password==password)
  res.send(login2)
})

app.post("/submit",function(req,res){
 let body=req.body 
 message.push(body)
  res.send(body)
})