"use strict";
const EmailTemplate = require("./EmailTemplate");
const nodemailer = require('nodemailer');

class EmailService {

    constructor() {
        this.user = 'noreply.automated.email.sender@gmail.com';
        this.password = 'foremailsendingpurpose';
        this.transporter = this.createTransporter(this.user, this.password);
    }

    createTransporter(user, pass) {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            host: "smtp.gmail.com",
            auth: {
                user,
                pass,
            },
        });
        return transporter;
    }

    async sendMail(targetEmail, targetName, code) {
        try {
            let info = await this.transporter.sendMail({
                from: 'noreply.automated.email.sender@gmail.com', // sender address
                to: targetEmail, // list of receivers
                subject: 'Verifikasi Akun', // Subject line
                text: "Verifikasi akun anda",
                attachments: [
                    {
                        filename: 'image-1.png',
                        path: __dirname + '/../assets/email/images/image-1.png',
                        cid: 'image-1'
                    },
                    {
                        filename: 'image-2.png',
                        path: __dirname + '/../assets/email/images/image-2.png',
                        cid: 'image-2'
                    },
                    {
                        filename: 'image-3.png',
                        path: __dirname + '/../assets/email/images/image-3.png',
                        cid: 'image-3'
                    },
                ], // plain text body
                html: EmailTemplate.verificationTemplate(targetName, code), // html body
            });
            return info;
        } catch (error) {
            console.log(error);
        }
    }

    checkStatus(info) {
        try {
            console.log("Message sent: %s", info.messageId);
            console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
        } catch (error) {
            console.log(error);
        }
    }
}


// const test = new EmailService();
// console.log(test.transporter);
// (async () => {
//     const info = await test.sendMail('alfauzansepta@gmail.com', 'Septa', 123130);
//     console.log(test.checkStatus(info));
// })()

