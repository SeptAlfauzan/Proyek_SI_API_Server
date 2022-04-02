const User = require("../models/UsersModel");

class UserController {
    static getAll = async (req, res) => {
        try {
            const user = await User.findAll();
            console.log(user);
            res.json({ data: user });
        } catch (err) {
            console.log(err);
        }
    }
    static getUser = async (req, res) => {
        const { email, username } = req.params;
        console.log(email, username);
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
        try {
            const effectedRows = await User.update({
                verified: true,
            },
                {
                    where: { username, email, verificationCode },
                }
            );
            effectedRows == 1 ? res.status(200).json({ message: 'verification success!' }) : res.status(500).json({ message: 'verification fail!' });
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: error });
        }
    }
}

module.exports = UserController;