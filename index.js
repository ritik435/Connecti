const express=require('express');

const app=express();
const cookieParser=require('cookie-parser');
const hostname='127.0.0.1';
const port = 200;
const db = require('./config/mongoose');

// app.use(expressLayouts);
// // extract style and scripts from sub pages into the layout
// app.set('layout extractStyles', true);
// app.set('layout extractScripts', true);




//set up view engine
app.set('view engine','ejs');
app.set('views','./views');

//our main middleware
app.use(express.urlencoded());

//cookie parser
app.use(cookieParser());

//use express router
app.use('/', require('./routes/route'));

//static files added
app.use(express.static('./views/assets'));


app.listen(port,hostname,function(err){
    if(err){
        console.log(`error while loading server${err}`);
        return; 
    }
    console.log(`Server is running on : http://${hostname}:${port}`);
    return;
})