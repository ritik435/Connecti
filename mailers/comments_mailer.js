let nodeMailer=require('../config/nodemailer');

exports.newComment=(comment) => {
    console.log('newComment mailer',comment)

    nodeMailer.transporter.sendMail({
        from : 'connecti435@gmail.com',
        to : comment.user.email ,
        subject : 'New comment Published' ,
        html :`<h1>Yup,your comment is now published!${comment.content} </h1>`
    
    },(err,info) =>{
        if(err){
            console.log(`error in comment mailer ${err}`);
            return;
        }
        console.log(`Message sent ${info}`);
            return;
    })
    
}

