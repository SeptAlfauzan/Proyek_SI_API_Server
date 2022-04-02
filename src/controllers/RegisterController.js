const bcrypt = require('bcryptjs');
const { JSON } = require('mysql/lib/protocol/constants/types');
const { Op } = require('@sequelize/core');
const DB = require('../configs/DB');
const User = require('../models/UsersModel');
const EmailService = require('../utils/EmailService');

class RegisterController {
    static checkUsernameTaken = async (req, res) => {
        try {
            const username = 'lorem';
            const check = await User.findOne({ where: { username } });
            check ? res.status(200).json({ message: 'username already taken', data: check }) : res.status(200).send(JSON.stringify({ message: 'username available' }));
        } catch (error) {
            console.log(error)
            return res.status(200).send(JSON.stringify({ message: 'username available' }));
        }
    }
    static register = async (req, res) => {
        try {
            const { email, username, password, name, address, phone } = req.body;
            // generate hashed password
            const saltRound = 10;
            const hashedPassword = bcrypt.hashSync(password, saltRound)
            // save to database
            const verificationNum = Math.floor(100000 + Math.random() * 900000);
            const [user, created] = await User.findOrCreate({
                where: {
                    [Op.or]: [{ username: username }, { email: email }, { phone: phone }]
                },
                defaults: {
                    name,
                    password: hashedPassword,
                    address,
                    verificationCode: verificationNum,
                }
            });
            console.log('created', created, user);
            // response
            if (created) {
                const verificationEmail = new EmailService();
                verificationEmail.sendMail(email, name, verificationNum);
                console.log(verificationEmail.checkStatus());

                res.status(200).json({ message: 'registration success!' });
            } else {
                res.status(409).json({ message: 'registration failed!' });
            }
        } catch (error) {
            console.log('error', error);
            res.status(500).json({ message: 'registration failed!' });
        }
    };

    static checkConnection = (req, res) => {
        try {
            DB.checkConnection();
            res.status(200).json({ message: 'succes to connect database' });
        } catch (error) {
            console.log(error.message);
            res.status(500).json({ message: `fail to connect database, ${error.message}` })
        }
    }
}

module.exports = RegisterController;