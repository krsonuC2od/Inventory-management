const express  = require('express')
const Port =3100;
const app = express();

app.get('/',(req,res)=>{
    res.send("welcome to home");
})
app.listen(Port,()=>{
    console.log(`your server is running on ${Port}`);
})