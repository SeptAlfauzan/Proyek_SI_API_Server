const User = require("../models/UsersModel");
const EmailService = require('../utils/EmailService');

class UserController {
    static getAll = async (req, res) => {
        try {
            const user = await User.findAll();
            res.json({ data: user });
        } catch (err) {
            console.log(err);
        }
    }
    static getUser = async (req, res) => {
        const { email, username } = req.params;
        try {
            const user = await User.findOne({ where: { email, username } });
            res.status(200).json({ user });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
    static verify = async (req, res) => {// PUT method
        const { username } = req.params;
        const { email, verificationCode } = req.body;
        console.log(username, email, verificationCode);
        try {
            const effectedRows = await User.update({
                verified: 1,
            },
                {
                    where: { username, email, verificationCode },
                }
            );
            effectedRows == 1 ? res.status(200).json({ message: 'verification success!' }) : res.status(500).json({ message: 'verification fail!' });
            console.log(effectedRows)
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }
    }

    static sendResetPassword = async (req, res) => {
        // const verificationEmail = new EmailService();
        // verificationEmail.sendMail(email, name, verificationNum);
        // console.log(verificationEmail.checkStatus());
    }
}

module.exports = UserController;