const express = require('express');
const app = express();

//used to capture data from user
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//used to display css
app.use(express.static('public'));

const apiRoutes = require('./routes/apiRoutes');
const htmlRoutes  = require('./routes/htmlRoutes');

//call the routes
app.use('/api',apiRoutes);
app.use('/',htmlRoutes);

//both local and deployed port
const PORT = process.env.PORT || 3001;


app.listen(PORT,()=>{
    console.log(`Server started on ${PORT}`);
});