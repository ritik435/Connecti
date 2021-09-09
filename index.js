const express=require('express');

const app=express();

const hostname='127.0.0.1';
const port = 200;


app.listen(port,hostname,function(err){
    if(err){
        console.log(`error while loading server${err}`);
        return;
    }
    console.log(`Server is running on : http://${hostname}:${port}`);
    return;
})