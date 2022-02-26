const JWT = require('../utils/JWTUtils')

class AuthMiddleware {

    static auth = (req, res, next) => {
        const token = req.headers["authorization"];

        if (!token) return res.status(401).send("No token, no access 🤚");
        const isAuthenticated = JWT.verifyToken(token);
        // if token is valid, allow user to access the routes
        // console.log(isAuthenticated)
        if (isAuthenticated) return next();
        // otherwise declined their access
        return res.status(401).send("Your token is invalid! ⚠");
    }
}

module.exports = AuthMiddleware;