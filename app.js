const express = require ("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");
const app = express();
var items=["Buy Food", "Cook Food", "Eat food"];
var worklist=[];
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static("public"));

app.get("/",function(req,res){



let day = date.getDate();

res.render("list",{kindofday: day,newitem:items });

});
app.post("/",function(req,res){
  var item=req.body.new;
  if(req.body.list=="Work"){
    worklist.push(item);
    res.redirect("/work");
  }else{
  items.push(item);
  res.redirect("/");
}
});

app.get("/work",function(req,res){
  res.render("list",{kindofday: "Work",newitem:worklist });
});


app.listen(3000,function(){
  console.log("server is okay");
})
