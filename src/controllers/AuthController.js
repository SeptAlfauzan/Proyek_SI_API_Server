const bcrypt = require('bcryptjs');
const res = require('express/lib/response');
const NotifToken = require('../models/NotifTokensModel');
const Token = require('../models/TokenModel');
const User = require('../models/UsersModel');
// utils
const JWT = require('./../utils/JWTUtils');

class AuthController {
    static login = async (req, res) => {
        try {
            const { username, password, notifToken } = req.body;
            const users = await User.findOne({ where: { username } });

            if (users === null) return res.status(404).json({ message: 'Username not found' })

            const comparePassword = bcrypt.compareSync(password, users.password);

            if (!comparePassword) return res.status(404).json({ message: 'Password not match!' });
            // register token here
            // NotifToken.create({ user_id: users.id, token: notifToken });

            res.json({ message: 'login success' });
        } catch (error) {
            console.log(error)
        }
    };

    static getToken = async (req, res) => {
        try {
            const { username } = req.body;
            // replace with request data from login
            const user = await User.findOne({ where: { username } });
            // const tokenRecord = await Token.findOne({ where: { user_id: user.id }, order: [['version', 'DESC']] });
            // const newVersion = tokenRecord.version + 1;
            const token = JWT.generateToken({ username: user.username });
            // const refreshToken = JWT.generateRefreshToken({ user_id: user.id, username: user.username, version: newVersion });

            const result = {
                auth: true,
                username: user.username,
                'access-token': token,
                // 'refresh-token': refreshToken,
                // version: newVersion
            }
            // insert to token table
            // const data = {
            //     user_id: user.id,
            //     refresh_token: refreshToken,
            //     version: newVersion
            // }

            // const [record, created] = await Token.findOrCreate({ where: { user_id: user.id }, defaults: data });
            // console.log(record.isNewRecord);
            // if (!record.isNewRecord) {
            //     record.set(data);
            //     await record.save();
            // }
            res.json(result);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'something wrong on server' });
        }
    };

    static refreshToken = async (req, res) => {
        try {
            const refreshToken = req.headers['authorization']
            const payload = JWT.getPayload(refreshToken);
            const { username } = payload;
            // generate new token
            const token = JWT.generateToken({ username });
            const result = {
                auth: true,
                username,
                'access-token': token,
            }
            res.status(200).json(result);
        } catch (error) {
            console.log(error);
            res.status(500).json({ message: 'something wrong on server' });
        }
    }

    static giveRespond = (req, res) => {
        res.json("you're authenticated");
    }
}

module.exports = AuthController;