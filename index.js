const express=require('express');
const app=express();
const cookieParser=require('cookie-parser');
const hostname='127.0.0.1';
const port = 200;
const db = require('./config/mongoose');
const session=require('express-session');
const passport=require('passport');
const passportLocal=require('./config/passport-local-strategy');
const MongoStore = require('connect-mongo');
var sassMiddleware = require('node-sass-middleware');


//sass Middleware
app.use(sassMiddleware({
    src:'./views/assets/scss',
    dest:'./views/assets/css',
    debug: true,
    outputStyle:'extended',
    prefix:'/css'
}));




// app.use(expressLayouts);
// // extract style and scripts from sub pages into the layout
// app.set('layout extractStyles', true);
// app.set('layout extractScripts', true);


//sass middleware




//our main middleware
app.use(express.urlencoded());

//cookie parser
app.use(cookieParser());



//static files added
app.use(express.static('./views/assets'));

//set up view engine
app.set('view engine','ejs');
app.set('views','./views');


//mongoStore is used to store session cookies
app.use(session({
    name: 'Connecti',
    // TODO change the secret before deployment in production mode
    secret: 'blahsomething',
    saveUninitialized: false,
    resave: false,
    cookie: {
        maxAge: (1000 * 60 * 100)
    },
    store: MongoStore.create(
        {
            mongoUrl:'mongodb://localhost/user_db',
            autoRemove: 'disabled'
        
        },
        function(err){
            console.log(err ||  'connect-mongodb setup ok');
        }
    )
}));

app.use(passport.initialize());
app.use(passport.session());

app.use(passport.setAuthenticatedUser);




//use express router
app.use('/', require('./routes/route'));

app.listen(port,hostname,function(err){
    if(err){
        console.log(`error while loading server${err}`);
        return; 
    }
    console.log(`Server is running on : http://${hostname}:${port}`);
    return;
})