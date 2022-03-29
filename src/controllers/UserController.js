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
}

module.exports = UserController;