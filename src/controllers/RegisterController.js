const bcrypt = require('bcryptjs');
const { JSON } = require('mysql/lib/protocol/constants/types');
const DB = require('../configs/DB');
const User = require('../models/UsersModel');

class RegisterController {
    static checkUsernameTaken = async (req, res) => {
        try {
            const username = 'lorem';
            const check = await User.findOne({ where: { username } });
            res.status(200).json({ message: 'username already taken', data: check })
        } catch (error) {
            console.log(error)
            return res.status(200).send(JSON.stringify({ message: 'username available' }));
        }
    }
    static register = async (req, res) => {
        try {
            const { username, password, name, address, phone_num } = req.body;
            // generate hashed password
            const saltRound = 10;
            const hashedPassword = bcrypt.hashSync(password, saltRound)
            // save to database
            const [user, created] = await User.findOrCreate({
                where: { username },
                defaults: {
                    password: hashedPassword
                }
            });
            console.log('created', created);
            // response
            res.status(200).json({ message: 'registration success!' });
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