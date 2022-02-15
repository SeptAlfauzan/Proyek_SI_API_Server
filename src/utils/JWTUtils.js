const jwt = require('jsonwebtoken');
require('dotenv').config()
// const expireTime = 2628000;
class JWT {

    static generateToken = (id) => {
        const token = jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
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

}

module.exports = JWT;