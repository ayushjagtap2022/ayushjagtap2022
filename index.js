const express = require('express');
const app = express();
app.get('/api',(res,res)=>{
res.send({message:"Hello world"})
})
app.listen(5000);
//this line added by ayush
