let nodeMailer=require('../config/nodemailer');

exports.newComment=(comment) => {
    let mailerString=nodeMailer.renderTemplate({comment:comment} ,'/commentMailer/new_comment.ejs')

    nodeMailer.transporter.sendMail({
        from : 'connecti435@gmail.com',
        to : comment.user.email ,
        subject : 'New comment Published' ,
        html :mailerString
    
    },(err,info) =>{
        if(err){
            console.log(`error in comment mailer ${err}`);
            return;
        }
        console.log(`Message sent ${info}`);
            return;
    })
    
}

