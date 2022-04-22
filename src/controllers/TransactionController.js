const Transaction = require("../models/TransactionsModel");
const User = require("../models/UsersModel");
const Order = require("../models/OrdersModel");
const Patner = require("../models/PatnersModel");
const EmailService = require('../utils/EmailService');
const QRCode = require('qrcode')


class TransactionController {

    static async getAll(req, res) {
        try {
            User.hasMany(Transaction, { foreignKey: 'user_id' });
            Patner.hasMany(Transaction, { foreignKey: 'patner_id' });
            Order.hasMany(Transaction, { foreignKey: 'order_id' });

            Transaction.belongsTo(User, { foreignKey: 'user_id' });
            Transaction.belongsTo(Patner, { foreignKey: 'patner_id' });
            Transaction.belongsTo(Order, { foreignKey: 'order_id' });


            const transactions = await Transaction.findAll({
                include: [
                    {
                        model: User,
                        attributes: [
                            'name',
                            'address',
                        ]
                    },
                    {
                        model: Patner,
                        attributes: [
                            'name',
                            'address',
                        ]
                    },
                    {
                        model: Order,
                        attributes: [
                            'bill',
                        ]
                    },
                ]
            });
            console.log(transactions);
            res.json(transactions);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

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