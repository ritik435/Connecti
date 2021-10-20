// const kue=require('kue');
const queue=require('../config/kue');

const commentsMailer=require('../mailers/comments_mailer');


queue.process('emails', function(job, done){
    // console.log('Email Worker is assigned' , job.data);
    commentsMailer.newComment(job.data);

    done();
})

module.exports=queue;