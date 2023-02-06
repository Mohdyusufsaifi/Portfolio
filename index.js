const express= require('express');
const bodyParser=require('body-parser');
const app=express();
const path=require('path');
const dirname=path.join(__dirname+"/Pages");
const Path=path.join(__dirname);
const mail=require("./routers/mailsend.js")

app.use(bodyParser.urlencoded());

app.use(express.static(dirname));
app.use(express.static(Path));
app.use(mail);

const PORT=process.env.PORT||3000

app.get('',(req,res)=>{
    res.sendFile(dirname+"/Home.html");
});

app.get('/Home',(req,res)=>{
    res.sendFile(dirname+"/Home.html");
});

app.get('/about',(req,res)=>{
    res.sendFile(dirname+"/about.html");
});

app.get('/Contact',(_,res)=>{
    res.sendFile(dirname+"/Contact.html");
});


app.listen(PORT,console.log(`server is listen http://localhost:${PORT}`));
