const Transaction = require("../models/TransactionsModel");
const EmailService = require('../utils/EmailService');
const QRCode = require('qrcode')


class TransactionController {
    static async sendInvoice(req, res) {
        try {
            const url = "testing";
            // generate qr code
            QRCode.toDataURL(url, (err, src) => {
                if (err) res.send("Error occured");


                let base64 = imageBase64.value.split('base64,')[1];
                let hex = [...atob(base64)].map(c => c.charCodeAt(0).toString(16).padStart(2, 0));
                let img = 'data:image/png,%' + hex.join('%');
                // Let us return the QR code image as our response and set it to be the source used in the webpage
                const invoiceEmail = new EmailService();
                invoiceEmail.sendMailInvoice("alfauzansepta@gmail.com", "septa", src);
                res.json({ img });
            });
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TransactionController;