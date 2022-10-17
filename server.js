const express = require('express');
const app = express();

const {notes} = require('./db/db.json');

app.get('/notes',(req,res)=>{
    res.json(notes);
});

app.listen(3001,()=>{
    console.log(`Server started`);
});