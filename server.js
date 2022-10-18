const express = require('express');
const app = express();

const fs = require('fs');
const path = require('path');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(express.static('public'));

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes  = require('./routes/htmlRoutes');

app.use('/api',apiRoutes);
app.use('/',htmlRoutes);

const PORT = process.env.PORT || 3001;

const {notes} = require('./db/db.json');

app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
});