const jwt = require('jsonwebtoken');
const SECRET = "@#$(@#!@";
const expireTime = 2628000;
class JWT {
    static generateToken = (id) => {
        const token = jwt.sign({ id }, SECRET, {
            expiresIn: '30s'
        });
        return token;
    }

    static verifyJWT = (req, res, next) => {
        console.log(req.headers)
        const token = req.headers["authorization"];
        if (!token) return res.status(401).send("No token, no access 🤚");
        jwt.verify(token, SECRET, (err, decoded) => {
            if (err) return res.status(401).send("Your token is invalid! ⚠");
            console.log(decoded)
            next();
        })
    }
}

module.exports = JWT;