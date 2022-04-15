const jwt = require('jsonwebtoken');
require('dotenv').config()
// const expireTime = 2628000;
class JWT {

    static generateToken = ({ username }) => {
        const token = jwt.sign({ username }, process.env.JWT_SECRET_KEY, {
            expiresIn: '7d'
        });
        return token;
    }
    static generateRefreshToken = ({ user_id, username, version }) => {
        const token = jwt.sign({ user_id, username, version }, process.env.JWT_SECRET_KEY, {
            expiresIn: '1d'
        });
        return token;
    }

    static verifyToken = (token) => {
        try {
            jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
                if (err) throw err
            });
            return true;
        } catch (error) {
            console.log('ERROR', error.message)
            return false
        }
    }

    static getPayload = (token) => {
        try {
            return jwt.verify(token, process.env.JWT_SECRET_KEY, (err, decoded) => {
                if (err) throw err
                return decoded;
            });
        } catch (error) {
            console.log('ERROR', error.message)
            return false
        }
    }

}

module.exports = JWT;