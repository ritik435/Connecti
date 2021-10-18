const nodemailer = require("nodemailer");
const path=require('path');
const ejs=require('ejs');
const Mail = require("nodemailer/lib/mailer");

let transporter = nodemailer.createTransport({
  service:'gmail',
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: 'connecti435@gmail.com', 
    pass: 'socialmedia' 
  }
});


let renderTemplate = (data,relativePath) => {
    let mainHtml;
    ejs.renderFile(
        path.join(__dirname,'../views/mailers',relativePath),
        data,
        function(err,template){
            if(err) {
                console.log('error in rendering ejs',err);
                return;
            }
            mainHtml=template;
        }
        )
        return mainHtml;
}


module.exports={
    transporter : transporter,
    renderTemplate : renderTemplate

}