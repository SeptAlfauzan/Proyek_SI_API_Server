"use strict";
const EmailTemplate = require("./EmailTemplate");
const nodemailer = require('nodemailer');
require('dotenv').config();


class EmailService {

  constructor() {
    this.user = process.env.EMAIL_USERNAME;
    this.password = process.env.EMAIL_PASSWORD;
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

  async sendMailInvoice(targetEmail, targetName, code) {
    try {
      let info = await this.transporter.sendMail({
        from: 'noreply.automated.email.sender@gmail.com', // sender address
        to: targetEmail, // list of receivers
        subject: 'Invoice Order', // Subject line
        text: "Invoice Order anda",
        // plain text body
        html: EmailTemplate.invoiceTemplate(targetName, code), // html body
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

module.exports = EmailService;

