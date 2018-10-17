const mailerInfo = require('../config/mailerConfig')
nodeMailer = require('nodemailer');
module.exports = {
    mail(email, pass) {

        if (!email.includes('@')) {
            email = mailerInfo.transporter.auth.user
        }

        let transporter = nodeMailer.createTransport(mailerInfo.transporter);
        let options = {from : mailerInfo.options.from,
                       to : email,
                       subject : mailerInfo.options.subject,
                       text : mailerInfo.options.text,
                       html: `<p>email is: <b>${email}</b></p>
                       <p>password is:<br> <b>${pass}</b></p>`
                    };

        transporter.sendMail(options, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log(info.messageId)
            console.log(info.response)
        });
    }
}